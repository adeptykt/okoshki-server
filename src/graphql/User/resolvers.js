const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('1234567890', 4)

const User = {
  Query: {
    findUniqueUser: (_parent, args, { prisma }) => {
      return prisma.user.findUnique(args)
    },
    findFirstUser: (_parent, args, { prisma }) => {
      return prisma.user.findFirst(args)
    },
    findManyUser: (_parent, args, { prisma }) => {
      return prisma.user.findMany(args)
    },
    findManyUserCount: (_parent, args, { prisma }) => {
      return prisma.user.count(args)
    },
    findMeUser: (_parent, args, { prisma, verify }) => {
      if (!verify || !verify.id || verify.role !== 'user') {
        throw new Error('not allow')
      }
      args.where = {
        id: verify.id
      }
      return prisma.user.findUnique(args)
    },
  },
  Mutation: {
    sendUserPhone: async (parent, { data: { phone } }, { prisma }) => {
      const code = nanoid()
      const hashCode = await bcrypt.hash(code, 10)
      // const { data } = await axios.get('https://gate.smsaero.ru/v2/sms/send', {
      //   auth: {
      //     username: 'd.climentow@yandex.ru',
      //     password: 'JdIK4bg1hYCmvFVSI7BZoH2qtQT'
      //   },
      //   params: {
      //     number: phone,
      //     sign: 'SMS Aero',
      //     text: code
      //   }
      // })
      // if (data && data.success) {
        const user = await prisma.user.upsert({
          where: {
            phone: phone
          },
          update: {
            code: hashCode
          },
          create: {
            phone: phone,
            code: hashCode
          }
        })
        return user
      // } else {
      //   return null
      // }
    },
    sendUserCode: async (parent, { data: { phone, code, name }, select }, { prisma }) => {
      const user = await prisma.user.findUnique({
        where: {
          phone
        }
      })
      console.log('sendUserCode', process.env.TOKEN_SECRET);
      if (!user) {
        throw new Error('user not found')
      }
      // const compare = bcrypt.compareSync(code, user.code)
      // if (!compare) {
      //   throw new Error('code incorrect')
      // }
      const recode = nanoid()
      const hashCode = await bcrypt.hash(recode, 10)
      const updateUser = await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          code: hashCode,
          name,
          phone,
        },
        ...select.user
      })
      const token = jwt.sign({ id: user.id, role: 'user' }, process.env.TOKEN_SECRET)
      return {
        user: updateUser,
        token
      }
    },
    createOneUser: (_parent, args, { prisma }) => {
      return prisma.user.create(args)
    },
    updateOneUser: (_parent, args, { prisma }) => {
      return prisma.user.update(args)
    },
    deleteOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.delete(args)
    },
    upsertOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.upsert(args)
    },
    deleteManyUser: async (_parent, args, { prisma }) => {
      return prisma.user.deleteMany(args)
    },
    updateManyUser: (_parent, args, { prisma }) => {
      return prisma.user.updateMany(args)
    },
    updateMeUser: (_parent, args, { prisma, verify }) => {
      args.where = {
        id: verify.id
      }
      return prisma.user.update(args)
    },
  },
}

module.exports = {
  User,
}
