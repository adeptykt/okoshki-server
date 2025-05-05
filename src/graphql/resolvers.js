const { Category } = require('./Category/resolvers')
const { Service } = require('./Service/resolvers')
const { Schedule } = require('./Schedule/resolvers')
const { Promotion } = require('./Promotion/resolvers')
const { Request } = require('./Request/resolvers')
const { Master } = require('./Master/resolvers')
const { Company } = require('./Company/resolvers')
const { Admin } = require('./Admin/resolvers')
const { User } = require('./User/resolvers')

const resolvers = [
  User,
  Admin,
  Company,
  Master,
  Request,
  Promotion,
  Schedule,
  Service,
  Category,
]

module.exports = { resolvers }
