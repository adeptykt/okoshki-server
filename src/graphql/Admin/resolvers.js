const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Admin = {
  Query: {
    findCurrentAdmin: (_parent, { select }, { prisma, verify }) => {
      if (!verify || !verify.id || verify.role !== 'admin') {
        throw new Error('not allow')
      }
      return prisma.admin.findUnique({
        where: {
          id: verify.id
        },
        select
      })
    },
    findUniqueAdmin: (_parent, args, { prisma }) => {
      return prisma.admin.findUnique(args)
    },
    findFirstAdmin: (_parent, args, { prisma }) => {
      return prisma.admin.findFirst(args)
    },
    findManyAdmin: (_parent, args, { prisma }) => {
      return prisma.admin.findMany(args)
    },
    findManyAdminCount: (_parent, args, { prisma }) => {
      return prisma.admin.count(args)
    },
  },
  Mutation: {
    signInAdmin: async (parent, { data: { login, password }, select }, { prisma }) => {
      const admin = await prisma.admin.findUnique({
        where: {
          login
        },
        select: {
          ...select?.admin?.select,
          password: true,
          id: true,
        }
      })
      if (!admin) {
        throw new Error('admin not found')
      }
      const compare = bcrypt.compareSync(password, admin.password)
      if (!compare) {
        throw new Error('password incorrect')
      }
      const token = jwt.sign({ id: admin.id, role: 'admin' }, process.env.TOKEN_SECRET)
      return {
        admin,
        token
      }
    },
    createOneAdmin: (_parent, args, { prisma }) => {
      return prisma.admin.create(args)
    },
    updateOneAdmin: (_parent, args, { prisma }) => {
      return prisma.admin.update(args)
    },
    deleteOneAdmin: async (_parent, args, { prisma }) => {
      return prisma.admin.delete(args)
    },
    upsertOneAdmin: async (_parent, args, { prisma }) => {
      return prisma.admin.upsert(args)
    },
    deleteManyAdmin: async (_parent, args, { prisma }) => {
      return prisma.admin.deleteMany(args)
    },
    updateManyAdmin: (_parent, args, { prisma }) => {
      return prisma.admin.updateMany(args)
    },
  },
}

module.exports = {
  Admin,
}
