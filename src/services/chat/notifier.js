const { Expo } = require('expo-server-sdk');
const prisma = require('../../../prisma');
const LocalQueue = require('./queue');
const rateLimiter = require('../../utils/rateLimiter');

const expo = new Expo();
const notificationQueue = new LocalQueue(async (task) => {
  try {
    await expo.sendPushNotificationsAsync([{
      to: task.pushToken,
      sound: 'default',
      title: 'Новое сообщение',
      body: task.content
    }]);

    await prisma.message.update({
      where: { id: task.messageId },
      data: { deliveryStatus: 'DELIVERED' }
    });
  } catch (error) {
    await prisma.message.update({
      where: { id: task.messageId },
      data: { 
        deliveryStatus: 'FAILED',
        attempts: { increment: 1 }
      }
    });
    throw error;
  }
});

async function sendNotification(messageId, pushToken, content) {
  if (!rateLimiter.check(pushToken)) return;

  await notificationQueue.add('notification', {
    messageId,
    pushToken,
    content
  });
}
/**
 * Отправка сообщения с проверкой лимитов
 * @param {string} userId - ID отправителя
 * @param {string} chatId - ID чата
 * @param {string} content - Текст сообщения
 */
async function sendChatMessage(userId, chatId, content) {
  const [chat, sender] = await Promise.all([
    prisma.chat.findUnique({ where: { id: chatId } }),
    prisma.user.findUnique({ where: { id: userId } })
  ]);

  const message = await prisma.message.create({
    data: {
      content,
      senderId: userId,
      chatId,
      deliveryStatus: 'PENDING'
    }
  });

  for (const memberId of chat.memberIds) {
    if (memberId !== userId) {
      const member = await prisma.user.findUnique({ 
        where: { id: memberId },
        select: { pushToken: true } 
      });
      
      if (member.pushToken) {
        await notificationQueue.add('notification', {
          messageId: message.id,
          pushToken: member.pushToken,
          content
        });
      }
    }
  }

  return message;
}

module.exports = {
  sendChatMessage,
  sendNotification
}