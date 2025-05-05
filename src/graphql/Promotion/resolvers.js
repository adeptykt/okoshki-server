const Promotion = {
  Query: {
    findUniquePromotion: (_parent, args, { prisma }) => {
      return prisma.promotion.findUnique(args)
    },
    findFirstPromotion: (_parent, args, { prisma }) => {
      return prisma.promotion.findFirst(args)
    },
    findManyPromotion: (_parent, args, { prisma }) => {
      return prisma.promotion.findMany(args)
    },
    findManyPromotionCount: (_parent, args, { prisma }) => {
      return prisma.promotion.count(args)
    },
  },
  Mutation: {
    createOnePromotion: (_parent, args, { prisma }) => {
      return prisma.promotion.create(args)
    },
    updateOnePromotion: (_parent, args, { prisma }) => {
      return prisma.promotion.update(args)
    },
    deleteOnePromotion: async (_parent, args, { prisma }) => {
      return prisma.promotion.delete(args)
    },
    upsertOnePromotion: async (_parent, args, { prisma }) => {
      return prisma.promotion.upsert(args)
    },
    deleteManyPromotion: async (_parent, args, { prisma }) => {
      return prisma.promotion.deleteMany(args)
    },
    updateManyPromotion: (_parent, args, { prisma }) => {
      return prisma.promotion.updateMany(args)
    },
  },
}

module.exports = {
  Promotion,
}
