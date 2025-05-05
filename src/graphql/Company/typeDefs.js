const { default: gql } = require('graphql-tag')

const Company = gql`
  input CompanySignInInput {
    email: String!
    password: String!
  }

  type CompanyAuthPayload {
    company: Company!
    token: String!
  }

  type Company {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String!
    location: String
    address: String
    avatar: String
    images: [String!]!
    requests(
      where: RequestWhereInput
      orderBy: [RequestOrderByWithRelationInput]
      cursor: RequestWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RequestScalarFieldEnum]
    ): [Request!]!
    services(
      where: ServiceWhereInput
      orderBy: [ServiceOrderByWithRelationInput]
      cursor: ServiceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ServiceScalarFieldEnum]
    ): [Service!]!
    masters(
      where: MasterWhereInput
      orderBy: [MasterOrderByWithRelationInput]
      cursor: MasterWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MasterScalarFieldEnum]
    ): [Master!]!
    schedules(
      where: ScheduleWhereInput
      orderBy: [ScheduleOrderByWithRelationInput]
      cursor: ScheduleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ScheduleScalarFieldEnum]
    ): [Schedule!]!
  }

  type Query {
    findCurrentCompany: Company
    findUniqueCompany(where: CompanyWhereUniqueInput!): Company
    findFirstCompany(
      where: CompanyWhereInput
      orderBy: [CompanyOrderByWithRelationInput]
      cursor: CompanyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyScalarFieldEnum]
    ): Company
    findManyCompany(
      where: CompanyWhereInput
      orderBy: [CompanyOrderByWithRelationInput]
      cursor: CompanyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyScalarFieldEnum]
    ): [Company!]!
    findManyCompanyCount(
      where: CompanyWhereInput
      orderBy: [CompanyOrderByWithRelationInput]
      cursor: CompanyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyScalarFieldEnum]
    ): Int!
  }

  type Mutation {
    signInCompany(data:CompanySignInInput!): CompanyAuthPayload!
    createOneCompany(data: CompanyCreateInput!): Company!
    updateOneCompany(
      data: CompanyUpdateInput!
      where: CompanyWhereUniqueInput!
    ): Company!
    deleteOneCompany(where: CompanyWhereUniqueInput!): Company
    upsertOneCompany(
      where: CompanyWhereUniqueInput!
      create: CompanyCreateInput!
      update: CompanyUpdateInput!
    ): Company
    deleteManyCompany(where: CompanyWhereInput): BatchPayload
    updateManyCompany(
      data: CompanyUpdateManyMutationInput!
      where: CompanyWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Company,
}
