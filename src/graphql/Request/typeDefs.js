const { default: gql } = require('graphql-tag')

const Request = gql`
  type Request {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    date: String!
    times: [String!]!
    price: Int
    status: String!
    rating: Int!
    review: String
    code: String!
    companyId: String
    userId: String
    masterId: String
    categoryId: String
    company(where: CompanyWhereInput): Company
    user(where: UserWhereInput): User
    master(where: MasterWhereInput): Master
    category(where: CategoryWhereInput): Category
  }

  type Query {
    findUniqueRequest(where: RequestWhereUniqueInput!): Request
    findFirstRequest(
      where: RequestWhereInput
      orderBy: [RequestOrderByWithRelationInput]
      cursor: RequestWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RequestScalarFieldEnum]
    ): Request
    findManyRequest(
      where: RequestWhereInput
      orderBy: [RequestOrderByWithRelationInput]
      cursor: RequestWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RequestScalarFieldEnum]
    ): [Request!]!
    findManyRequestCount(
      where: RequestWhereInput
      orderBy: [RequestOrderByWithRelationInput]
      cursor: RequestWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RequestScalarFieldEnum]
    ): Int!
  }

  type Mutation {
    createOneRequest(data: RequestCreateInput!): Request!
    updateOneRequest(
      data: RequestUpdateInput!
      where: RequestWhereUniqueInput!
    ): Request!
    deleteOneRequest(where: RequestWhereUniqueInput!): Request
    upsertOneRequest(
      where: RequestWhereUniqueInput!
      create: RequestCreateInput!
      update: RequestUpdateInput!
    ): Request
    deleteManyRequest(where: RequestWhereInput): BatchPayload
    updateManyRequest(
      data: RequestUpdateManyMutationInput!
      where: RequestWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Request,
}
