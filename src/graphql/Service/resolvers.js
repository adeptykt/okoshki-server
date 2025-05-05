const Service = {
  Query: {
    findUniqueService: (_parent, args, { prisma }) => {
      return prisma.service.findUnique(args)
    },
    findFirstService: (_parent, args, { prisma }) => {
      return prisma.service.findFirst(args)
    },
    findManyService: (_parent, args, { prisma }) => {
      return prisma.service.findMany(args)
    },
    findManyServiceCount: (_parent, args, { prisma }) => {
      return prisma.service.count(args)
    },
  },
  Mutation: {
    createOneService: (_parent, args, { prisma }) => {
      return prisma.service.create(args)
    },
    updateOneService: (_parent, args, { prisma }) => {
      return prisma.service.update(args)
    },
    deleteOneService: async (_parent, args, { prisma }) => {
      return prisma.service.delete(args)
    },
    upsertOneService: async (_parent, args, { prisma }) => {
      return prisma.service.upsert(args)
    },
    deleteManyService: async (_parent, args, { prisma }) => {
      return prisma.service.deleteMany(args)
    },
    updateManyService: (_parent, args, { prisma }) => {
      return prisma.service.updateMany(args)
    },
  },
}

module.exports = {
  Service,
}
