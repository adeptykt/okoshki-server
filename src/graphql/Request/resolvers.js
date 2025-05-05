const sendMail = require('../../utils/mailer')

const Request = {
  Query: {
    findUniqueRequest: (_parent, args, { prisma }) => {
      return prisma.request.findUnique(args)
    },
    findFirstRequest: (_parent, args, { prisma }) => {
      return prisma.request.findFirst(args)
    },
    findManyRequest: (_parent, args, { prisma }) => {
      return prisma.request.findMany(args)
    },
    findManyRequestCount: (_parent, args, { prisma }) => {
      return prisma.request.count(args)
    },
  },
  Mutation: {
    createOneRequest: async (_parent, args, { prisma }) => {
      const request = await prisma.request.create(args)

      const company = await prisma.company.findUnique({
        where: {
          id: request.companyId
        }
      })

      // sendMail({
      //   to: company.email,
      //   subject: 'Уведомление Окошки Клик',
      //   text: 'Уведомление Окошки Клик',
      //   html: `Новая заявка №${request.code}`
      // })

      return request
    },
    updateOneRequest: (_parent, args, { prisma }) => {
      return prisma.request.update(args)
    },
    deleteOneRequest: async (_parent, args, { prisma }) => {
      return prisma.request.delete(args)
    },
    upsertOneRequest: async (_parent, args, { prisma }) => {
      return prisma.request.upsert(args)
    },
    deleteManyRequest: async (_parent, args, { prisma }) => {
      return prisma.request.deleteMany(args)
    },
    updateManyRequest: (_parent, args, { prisma }) => {
      return prisma.request.updateMany(args)
    },
  },
}

module.exports = {
  Request,
}
