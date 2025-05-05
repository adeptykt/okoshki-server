const { default: gql } = require('graphql-tag')

const Promotion = gql`
  type Promotion {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    text: String!
    image: String!
  }

  type Query {
    findUniquePromotion(where: PromotionWhereUniqueInput!): Promotion
    findFirstPromotion(
      where: PromotionWhereInput
      orderBy: [PromotionOrderByWithRelationInput]
      cursor: PromotionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PromotionScalarFieldEnum]
    ): Promotion
    findManyPromotion(
      where: PromotionWhereInput
      orderBy: [PromotionOrderByWithRelationInput]
      cursor: PromotionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PromotionScalarFieldEnum]
    ): [Promotion!]!
    findManyPromotionCount(
      where: PromotionWhereInput
      orderBy: [PromotionOrderByWithRelationInput]
      cursor: PromotionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PromotionScalarFieldEnum]
    ): Int!
  }

  type Mutation {
    createOnePromotion(data: PromotionCreateInput!): Promotion!
    updateOnePromotion(
      data: PromotionUpdateInput!
      where: PromotionWhereUniqueInput!
    ): Promotion!
    deleteOnePromotion(where: PromotionWhereUniqueInput!): Promotion
    upsertOnePromotion(
      where: PromotionWhereUniqueInput!
      create: PromotionCreateInput!
      update: PromotionUpdateInput!
    ): Promotion
    deleteManyPromotion(where: PromotionWhereInput): BatchPayload
    updateManyPromotion(
      data: PromotionUpdateManyMutationInput!
      where: PromotionWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Promotion,
}
