const router = require('express').Router();
const prisma = require('../prisma');

router.post('/expo-webhook', async (req, res) => {
  const { tickets } = req.body;
  
  for (const ticket of tickets) {
    await prisma.message.updateMany({
      where: { id: ticket.messageId },
      data: {
        deliveryStatus: ticket.status === 'ok' ? 'DELIVERED' : 'FAILED',
        ...(ticket.status === 'error' && { error: ticket.details.error })
      }
    });
  }

  res.sendStatus(200);
});

module.exports = router;