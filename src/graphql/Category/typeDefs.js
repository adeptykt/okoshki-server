const { default: gql } = require('graphql-tag')

const Category = gql`
  type Category {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    subcategory: String
    services(
      where: ServiceWhereInput
      orderBy: [ServiceOrderByWithRelationInput]
      cursor: ServiceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ServiceScalarFieldEnum]
    ): [Service!]!
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
    findUniqueCategory(where: CategoryWhereUniqueInput!): Category
    findFirstCategory(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByWithRelationInput]
      cursor: CategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoryScalarFieldEnum]
    ): Category
    findManyCategory(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByWithRelationInput]
      cursor: CategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoryScalarFieldEnum]
    ): [Category!]!
    findManyCategoryCount(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByWithRelationInput]
      cursor: CategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoryScalarFieldEnum]
    ): Int!
  }

  type Mutation {
    createOneCategory(data: CategoryCreateInput!): Category!
    updateOneCategory(
      data: CategoryUpdateInput!
      where: CategoryWhereUniqueInput!
    ): Category!
    deleteOneCategory(where: CategoryWhereUniqueInput!): Category
    upsertOneCategory(
      where: CategoryWhereUniqueInput!
      create: CategoryCreateInput!
      update: CategoryUpdateInput!
    ): Category
    deleteManyCategory(where: CategoryWhereInput): BatchPayload
    updateManyCategory(
      data: CategoryUpdateManyMutationInput!
      where: CategoryWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Category,
}
