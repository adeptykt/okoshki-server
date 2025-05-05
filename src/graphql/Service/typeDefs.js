const { default: gql } = require('graphql-tag')

const Service = gql`
  type Service {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    price: Int!
    companyId: String
    categoryId: String
    schedules(
      where: ScheduleWhereInput
      orderBy: [ScheduleOrderByWithRelationInput]
      cursor: ScheduleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ScheduleScalarFieldEnum]
    ): [Schedule!]!
    company(where: CompanyWhereInput): Company
    category(where: CategoryWhereInput): Category
  }

  type Query {
    findUniqueService(where: ServiceWhereUniqueInput!): Service
    findFirstService(
      where: ServiceWhereInput
      orderBy: [ServiceOrderByWithRelationInput]
      cursor: ServiceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ServiceScalarFieldEnum]
    ): Service
    findManyService(
      where: ServiceWhereInput
      orderBy: [ServiceOrderByWithRelationInput]
      cursor: ServiceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ServiceScalarFieldEnum]
    ): [Service!]!
    findManyServiceCount(
      where: ServiceWhereInput
      orderBy: [ServiceOrderByWithRelationInput]
      cursor: ServiceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ServiceScalarFieldEnum]
    ): Int!
  }

  type Mutation {
    createOneService(data: ServiceCreateInput!): Service!
    updateOneService(
      data: ServiceUpdateInput!
      where: ServiceWhereUniqueInput!
    ): Service!
    deleteOneService(where: ServiceWhereUniqueInput!): Service
    upsertOneService(
      where: ServiceWhereUniqueInput!
      create: ServiceCreateInput!
      update: ServiceUpdateInput!
    ): Service
    deleteManyService(where: ServiceWhereInput): BatchPayload
    updateManyService(
      data: ServiceUpdateManyMutationInput!
      where: ServiceWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Service,
}
