const { default: gql } = require('graphql-tag')

const User = gql`
  scalar Json

  input UserSendPhoneInput {
    phone: String!
  }

  input UserSendPhoneAndCodeInput {
    phone: String!
    code: String!
    name: String!
  }

  input UserUpdateMeInput {
    name: NullableStringFieldUpdateOperationsInput
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  type User {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    phone: String!
    code: String!
    name: String
    pushId: String
    requests(
      where: RequestWhereInput
      orderBy: [RequestOrderByWithRelationInput]
      cursor: RequestWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RequestScalarFieldEnum]
    ): [Request!]!
  }

  type Query {
    findMeUser: User
    findUniqueUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]!
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
  }

  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateMeUser(data: UserUpdateMeInput!): User!
    updateOneUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload
    sendUserPhone(data: UserSendPhoneInput!): User
    sendUserCode(data: UserSendPhoneAndCodeInput!): AuthPayload!
  }
`

module.exports = {
  User,
}
