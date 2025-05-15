const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();
const { sendNotification } = require('../../services/chat/notifier');

const Chat = {
    Query: {
        myChats: async (_, __, { userId, prisma }) => {
          return prisma.chat.findMany({
            where: {
              members: { some: { userId } }
            },
            include: {
              members: { include: { user: true } },
              messages: true
            }
          });
        },
        chatMessages: async (_, { chatId }, { prisma }) => {
          return prisma.message.findMany({
            where: { chatId },
            orderBy: { createdAt: 'asc' }
          });
        }
      },
    Mutation: {
        createChat: async (_, { input }, { userId, prisma }) => {
            return prisma.chat.create({
                data: {
                members: {
                    createMany: {
                        data: [...input.memberIds, userId].map(id => ({ userId: id }))
                    }
                }
                },
                include: { members: true }
            });
        },
        sendMessage: async (_, { input }, { userId, prisma }) => {
            const message = await prisma.message.create({
                data: {
                    content: input.content,
                    senderId: userId,
                    chatId: input.chatId
                },
                include: { sender: true }
            });
        
            pubsub.publish('NEW_MESSAGE', { 
                newMessage: message,
                chatId: input.chatId 
            });
        
            return message;
        },
        createMessage: async (_, { input }, { userId, prisma }) => {
            const message = await prisma.message.create({
                data: { ...input, senderId: userId }
            });
      
            const chat = await prisma.chat.findUnique({
                where: { id: input.chatId },
                include: { members: true }
            });
      
            chat.members.forEach(member => {
                if (member.id !== userId && member.pushToken) {
                    sendNotification(message.id, member.pushToken, input.content);
                }
            });
      
            return message;
        }
    },
    Subscription: {
        newMessage: {
            subscribe: (_, { chatId }) => {
               return pubsub.asyncIterator(`NEW_MESSAGE_${chatId}`);
            }
        },
        messageCreated: {
            subscribe: (_, { chatId }, { pubSub }) => {
                return pubSub.asyncIterator(`MESSAGE_${chatId}`);
            }
        }
    }
};

module.exports = { ChatResolver: Chat };