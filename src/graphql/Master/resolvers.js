const Master = {
  Query: {
    findUniqueMaster: (_parent, args, { prisma }) => {
      return prisma.master.findUnique(args)
    },
    findFirstMaster: (_parent, args, { prisma }) => {
      return prisma.master.findFirst(args)
    },
    findManyMaster: (_parent, args, { prisma }) => {
      return prisma.master.findMany(args)
    },
    findManyMasterCount: (_parent, args, { prisma }) => {
      return prisma.master.count(args)
    },
  },
  Mutation: {
    createOneMaster: (_parent, args, { prisma }) => {
      return prisma.master.create(args)
    },
    updateOneMaster: (_parent, args, { prisma }) => {
      return prisma.master.update(args)
    },
    deleteOneMaster: async (_parent, args, { prisma }) => {
      return prisma.master.delete(args)
    },
    upsertOneMaster: async (_parent, args, { prisma }) => {
      return prisma.master.upsert(args)
    },
    deleteManyMaster: async (_parent, args, { prisma }) => {
      return prisma.master.deleteMany(args)
    },
    updateManyMaster: (_parent, args, { prisma }) => {
      return prisma.master.updateMany(args)
    },
  },
}

module.exports = {
  Master,
}
