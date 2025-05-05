const { default: gql } = require('graphql-tag')

const Master = gql`
  type Master {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String!
    image: String!
    companyId: String
    company(where: CompanyWhereInput): Company
    request(
      where: RequestWhereInput
      orderBy: [RequestOrderByWithRelationInput]
      cursor: RequestWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RequestScalarFieldEnum]
    ): [Request!]!
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
    findUniqueMaster(where: MasterWhereUniqueInput!): Master
    findFirstMaster(
      where: MasterWhereInput
      orderBy: [MasterOrderByWithRelationInput]
      cursor: MasterWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MasterScalarFieldEnum]
    ): Master
    findManyMaster(
      where: MasterWhereInput
      orderBy: [MasterOrderByWithRelationInput]
      cursor: MasterWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MasterScalarFieldEnum]
    ): [Master!]!
    findManyMasterCount(
      where: MasterWhereInput
      orderBy: [MasterOrderByWithRelationInput]
      cursor: MasterWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MasterScalarFieldEnum]
    ): Int!
  }

  type Mutation {
    createOneMaster(data: MasterCreateInput!): Master!
    updateOneMaster(
      data: MasterUpdateInput!
      where: MasterWhereUniqueInput!
    ): Master!
    deleteOneMaster(where: MasterWhereUniqueInput!): Master
    upsertOneMaster(
      where: MasterWhereUniqueInput!
      create: MasterCreateInput!
      update: MasterUpdateInput!
    ): Master
    deleteManyMaster(where: MasterWhereInput): BatchPayload
    updateManyMaster(
      data: MasterUpdateManyMutationInput!
      where: MasterWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Master,
}
