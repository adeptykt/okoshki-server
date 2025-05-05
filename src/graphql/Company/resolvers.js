const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Company = {
  Query: {
    findCurrentCompany: (_parent, { select }, { prisma, verify }) => {
      if (!verify || !verify.id || verify.role !== 'company') {
        throw new Error('not allow')
      }
      return prisma.company.findUnique({
        where: {
          id: verify.id
        },
        select
      })
    },
    findUniqueCompany: (_parent, args, { prisma }) => {
      return prisma.company.findUnique(args)
    },
    findFirstCompany: (_parent, args, { prisma }) => {
      return prisma.company.findFirst(args)
    },
    findManyCompany: (_parent, args, { prisma }) => {
      return prisma.company.findMany(args)
    },
    findManyCompanyCount: (_parent, args, { prisma }) => {
      return prisma.company.count(args)
    },
    findManyCategory: async (_parent, args, { prisma }) => {
      const findManyCatalog = await prisma.catalog.findMany({
        select: {
          categories: true
        }
      })
      const categories = findManyCatalog.map(catalog => catalog.categories).flat(Infinity)
      return Array.from(new Set(categories))
    }
  },
  Mutation: {
    signInCompany: async (parent, { data: { email, password }, select }, { prisma }) => {
      const company = await prisma.company.findUnique({
        where: {
          email
        },
        select: {
          ...select?.company?.select,
          password: true,
          id: true
        }
      })
      if (!company) {
        throw new Error('company not found')
      }
      const compare = bcrypt.compareSync(password, company.password)
      if (!compare) {
        throw new Error('password incorrect')
      }
      const token = jwt.sign({ id: company.id, role: 'company' }, process.env.TOKEN_SECRET)
      return {
        company,
        token
      }
    },
    createOneCompany: async (_parent, args, { prisma }) => {
      if (args?.data?.password) args.data.password = await bcrypt.hash(`${args.data.password}`, 10)
      return prisma.company.create(args)
    },
    updateOneCompany: async (_parent, args, { prisma }) => {
      if (args?.data?.password) args.data.password.set = await bcrypt.hash(`${args.data.password.set}`, 10)
      return prisma.company.update(args)
    },
    deleteOneCompany: async (_parent, args, { prisma }) => {
      return prisma.company.delete(args)
    },
    upsertOneCompany: async (_parent, args, { prisma }) => {
      return prisma.company.upsert(args)
    },
    deleteManyCompany: async (_parent, args, { prisma }) => {
      return prisma.company.deleteMany(args)
    },
    updateManyCompany: (_parent, args, { prisma }) => {
      return prisma.company.updateMany(args)
    },
  },
}

module.exports = {
  Company,
}
