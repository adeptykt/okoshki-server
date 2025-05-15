const { mergeTypeDefs } = require('@graphql-tools/merge')
const { Category } = require('./Category/typeDefs')
const { Service } = require('./Service/typeDefs')
const { Schedule } = require('./Schedule/typeDefs')
const { Promotion } = require('./Promotion/typeDefs')
const { Request } = require('./Request/typeDefs')
const { Master } = require('./Master/typeDefs')
const { Company } = require('./Company/typeDefs')
const { Admin } = require('./Admin/typeDefs')
const { User } = require('./User/typeDefs')
const { Chat } = require('./Chat/typeDefs')
const { InputTypes } = require('./InputTypes')

const typeDefs = mergeTypeDefs([
  InputTypes,
  User,
  Admin,
  Company,
  Master,
  Request,
  Promotion,
  Schedule,
  Service,
  Category,
  Chat
])

module.exports = { typeDefs }
