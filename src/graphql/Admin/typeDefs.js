const { default: gql } = require('graphql-tag')

const Admin = gql`
  input AdminSignInInput {
    login: String!
    password: String!
  }

  type AdminAuthPayload {
    admin: Admin!
    token: String!
  }

  type Admin {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    login: String!
    password: String!
  }

  type Query {
    findCurrentAdmin: Admin
    findUniqueAdmin(where: AdminWhereUniqueInput!): Admin
    findFirstAdmin(
      where: AdminWhereInput
      orderBy: [AdminOrderByWithRelationInput]
      cursor: AdminWhereUniqueInput
      take: Int
      skip: Int
      distinct: [AdminScalarFieldEnum]
    ): Admin
    findManyAdmin(
      where: AdminWhereInput
      orderBy: [AdminOrderByWithRelationInput]
      cursor: AdminWhereUniqueInput
      take: Int
      skip: Int
      distinct: [AdminScalarFieldEnum]
    ): [Admin!]!
    findManyAdminCount(
      where: AdminWhereInput
      orderBy: [AdminOrderByWithRelationInput]
      cursor: AdminWhereUniqueInput
      take: Int
      skip: Int
      distinct: [AdminScalarFieldEnum]
    ): Int!
  }

  type Mutation {
    signInAdmin(data:AdminSignInInput!): AdminAuthPayload!
    createOneAdmin(data: AdminCreateInput!): Admin!
    updateOneAdmin(
      data: AdminUpdateInput!
      where: AdminWhereUniqueInput!
    ): Admin!
    deleteOneAdmin(where: AdminWhereUniqueInput!): Admin
    upsertOneAdmin(
      where: AdminWhereUniqueInput!
      create: AdminCreateInput!
      update: AdminUpdateInput!
    ): Admin
    deleteManyAdmin(where: AdminWhereInput): BatchPayload
    updateManyAdmin(
      data: AdminUpdateManyMutationInput!
      where: AdminWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Admin,
}
