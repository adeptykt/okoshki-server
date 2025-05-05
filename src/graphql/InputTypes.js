const { default: gql } = require('graphql-tag')

const InputTypes = gql`
  scalar DateTime
  type BatchPayload {
    count: Int!
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    createdAt
    updatedAt
    phone
    code
    name
    pushId
  }

  enum AdminScalarFieldEnum {
    id
    createdAt
    updatedAt
    login
    password
  }

  enum CompanyScalarFieldEnum {
    id
    createdAt
    updatedAt
    email
    phone
    whatsapp
    password
    repassword
    name
    description
    city
    location
    address
    avatar
    images
  }

  enum MasterScalarFieldEnum {
    id
    createdAt
    updatedAt
    name
    description
    image
    companyId
  }

  enum ServiceScalarFieldEnum {
    id
    createdAt
    updatedAt
    name
    price
    companyId
    categoryId
  }

  enum ScheduleScalarFieldEnum {
    id
    createdAt
    updatedAt
    week
    times
    companyId
  }

  enum RequestScalarFieldEnum {
    id
    createdAt
    updatedAt
    date
    times
    price
    status
    rating
    review
    code
    companyId
    userId
    masterId
    categoryId
  }

  enum CategoryScalarFieldEnum {
    id
    createdAt
    updatedAt
    name
    subcategory
  }

  enum PromotionScalarFieldEnum {
    id
    createdAt
    updatedAt
    name
    text
    image
  }

  enum SortOrder {
    asc
    desc
  }

  enum QueryMode {
    default
    insensitive
  }

  enum NullsOrder {
    first
    last
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    phone: StringFilter
    code: StringFilter
    name: StringNullableFilter
    pushId: StringNullableFilter
    requests: RequestListRelationFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    phone: SortOrder
    code: SortOrder
    name: SortOrderInput
    pushId: SortOrderInput
    requests: RequestOrderByRelationAggregateInput
  }

  input UserWhereUniqueInput {
    id: String
    phone: String
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    code: StringFilter
    name: StringNullableFilter
    pushId: StringNullableFilter
    requests: RequestListRelationFilter
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    phone: SortOrder
    code: SortOrder
    name: SortOrderInput
    pushId: SortOrderInput
    _count: UserCountOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    phone: StringWithAggregatesFilter
    code: StringWithAggregatesFilter
    name: StringNullableWithAggregatesFilter
    pushId: StringNullableWithAggregatesFilter
  }

  input AdminWhereInput {
    AND: [AdminWhereInput!]
    OR: [AdminWhereInput!]
    NOT: [AdminWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    login: StringFilter
    password: StringFilter
  }

  input AdminOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    login: SortOrder
    password: SortOrder
  }

  input AdminWhereUniqueInput {
    id: String
    login: String
    AND: [AdminWhereInput!]
    OR: [AdminWhereInput!]
    NOT: [AdminWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    password: StringFilter
  }

  input AdminOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    login: SortOrder
    password: SortOrder
    _count: AdminCountOrderByAggregateInput
    _max: AdminMaxOrderByAggregateInput
    _min: AdminMinOrderByAggregateInput
  }

  input AdminScalarWhereWithAggregatesInput {
    AND: [AdminScalarWhereWithAggregatesInput!]
    OR: [AdminScalarWhereWithAggregatesInput!]
    NOT: [AdminScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    login: StringWithAggregatesFilter
    password: StringWithAggregatesFilter
  }

  input CompanyWhereInput {
    AND: [CompanyWhereInput!]
    OR: [CompanyWhereInput!]
    NOT: [CompanyWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    email: StringFilter
    phone: StringNullableFilter
    whatsapp: StringNullableFilter
    password: StringFilter
    repassword: StringNullableFilter
    name: StringFilter
    description: StringFilter
    city: StringFilter
    location: StringNullableFilter
    address: StringNullableFilter
    avatar: StringNullableFilter
    images: StringNullableListFilter
    requests: RequestListRelationFilter
    services: ServiceListRelationFilter
    masters: MasterListRelationFilter
    schedules: ScheduleListRelationFilter
  }

  input CompanyOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    email: SortOrder
    phone: SortOrderInput
    whatsapp: SortOrderInput
    password: SortOrder
    repassword: SortOrderInput
    name: SortOrder
    description: SortOrder
    city: SortOrder
    location: SortOrderInput
    address: SortOrderInput
    avatar: SortOrderInput
    images: SortOrder
    requests: RequestOrderByRelationAggregateInput
    services: ServiceOrderByRelationAggregateInput
    masters: MasterOrderByRelationAggregateInput
    schedules: ScheduleOrderByRelationAggregateInput
  }

  input CompanyWhereUniqueInput {
    id: String
    email: String
    AND: [CompanyWhereInput!]
    OR: [CompanyWhereInput!]
    NOT: [CompanyWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    phone: StringNullableFilter
    whatsapp: StringNullableFilter
    password: StringFilter
    repassword: StringNullableFilter
    name: StringFilter
    description: StringFilter
    city: StringFilter
    location: StringNullableFilter
    address: StringNullableFilter
    avatar: StringNullableFilter
    images: StringNullableListFilter
    requests: RequestListRelationFilter
    services: ServiceListRelationFilter
    masters: MasterListRelationFilter
    schedules: ScheduleListRelationFilter
  }

  input CompanyOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    email: SortOrder
    phone: SortOrderInput
    whatsapp: SortOrderInput
    password: SortOrder
    repassword: SortOrderInput
    name: SortOrder
    description: SortOrder
    city: SortOrder
    location: SortOrderInput
    address: SortOrderInput
    avatar: SortOrderInput
    images: SortOrder
    _count: CompanyCountOrderByAggregateInput
    _max: CompanyMaxOrderByAggregateInput
    _min: CompanyMinOrderByAggregateInput
  }

  input CompanyScalarWhereWithAggregatesInput {
    AND: [CompanyScalarWhereWithAggregatesInput!]
    OR: [CompanyScalarWhereWithAggregatesInput!]
    NOT: [CompanyScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    email: StringWithAggregatesFilter
    phone: StringNullableWithAggregatesFilter
    whatsapp: StringNullableWithAggregatesFilter
    password: StringWithAggregatesFilter
    repassword: StringNullableWithAggregatesFilter
    name: StringWithAggregatesFilter
    description: StringWithAggregatesFilter
    city: StringWithAggregatesFilter
    location: StringNullableWithAggregatesFilter
    address: StringNullableWithAggregatesFilter
    avatar: StringNullableWithAggregatesFilter
    images: StringNullableListFilter
  }

  input MasterWhereInput {
    AND: [MasterWhereInput!]
    OR: [MasterWhereInput!]
    NOT: [MasterWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringFilter
    description: StringFilter
    image: StringFilter
    companyId: StringNullableFilter
    company: CompanyNullableRelationFilter
    request: RequestListRelationFilter
    schedules: ScheduleListRelationFilter
  }

  input MasterOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    description: SortOrder
    image: SortOrder
    companyId: SortOrderInput
    company: CompanyOrderByWithRelationInput
    request: RequestOrderByRelationAggregateInput
    schedules: ScheduleOrderByRelationAggregateInput
  }

  input MasterWhereUniqueInput {
    id: String
    AND: [MasterWhereInput!]
    OR: [MasterWhereInput!]
    NOT: [MasterWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringFilter
    description: StringFilter
    image: StringFilter
    companyId: StringNullableFilter
    company: CompanyNullableRelationFilter
    request: RequestListRelationFilter
    schedules: ScheduleListRelationFilter
  }

  input MasterOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    description: SortOrder
    image: SortOrder
    companyId: SortOrderInput
    _count: MasterCountOrderByAggregateInput
    _max: MasterMaxOrderByAggregateInput
    _min: MasterMinOrderByAggregateInput
  }

  input MasterScalarWhereWithAggregatesInput {
    AND: [MasterScalarWhereWithAggregatesInput!]
    OR: [MasterScalarWhereWithAggregatesInput!]
    NOT: [MasterScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    name: StringWithAggregatesFilter
    description: StringWithAggregatesFilter
    image: StringWithAggregatesFilter
    companyId: StringNullableWithAggregatesFilter
  }

  input ServiceWhereInput {
    AND: [ServiceWhereInput!]
    OR: [ServiceWhereInput!]
    NOT: [ServiceWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringNullableFilter
    price: IntFilter
    companyId: StringNullableFilter
    categoryId: StringNullableFilter
    schedules: ScheduleListRelationFilter
    company: CompanyNullableRelationFilter
    category: CategoryNullableRelationFilter
  }

  input ServiceOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrderInput
    price: SortOrder
    companyId: SortOrderInput
    categoryId: SortOrderInput
    schedules: ScheduleOrderByRelationAggregateInput
    company: CompanyOrderByWithRelationInput
    category: CategoryOrderByWithRelationInput
  }

  input ServiceWhereUniqueInput {
    id: String
    AND: [ServiceWhereInput!]
    OR: [ServiceWhereInput!]
    NOT: [ServiceWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringNullableFilter
    price: IntFilter
    companyId: StringNullableFilter
    categoryId: StringNullableFilter
    schedules: ScheduleListRelationFilter
    company: CompanyNullableRelationFilter
    category: CategoryNullableRelationFilter
  }

  input ServiceOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrderInput
    price: SortOrder
    companyId: SortOrderInput
    categoryId: SortOrderInput
    _count: ServiceCountOrderByAggregateInput
    _avg: ServiceAvgOrderByAggregateInput
    _max: ServiceMaxOrderByAggregateInput
    _min: ServiceMinOrderByAggregateInput
    _sum: ServiceSumOrderByAggregateInput
  }

  input ServiceScalarWhereWithAggregatesInput {
    AND: [ServiceScalarWhereWithAggregatesInput!]
    OR: [ServiceScalarWhereWithAggregatesInput!]
    NOT: [ServiceScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    name: StringNullableWithAggregatesFilter
    price: IntWithAggregatesFilter
    companyId: StringNullableWithAggregatesFilter
    categoryId: StringNullableWithAggregatesFilter
  }

  input ScheduleWhereInput {
    AND: [ScheduleWhereInput!]
    OR: [ScheduleWhereInput!]
    NOT: [ScheduleWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    week: StringNullableListFilter
    times: StringNullableListFilter
    companyId: StringNullableFilter
    services: ServiceListRelationFilter
    masters: MasterListRelationFilter
    company: CompanyNullableRelationFilter
  }

  input ScheduleOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    week: SortOrder
    times: SortOrder
    companyId: SortOrderInput
    services: ServiceOrderByRelationAggregateInput
    masters: MasterOrderByRelationAggregateInput
    company: CompanyOrderByWithRelationInput
  }

  input ScheduleWhereUniqueInput {
    id: String
    AND: [ScheduleWhereInput!]
    OR: [ScheduleWhereInput!]
    NOT: [ScheduleWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    week: StringNullableListFilter
    times: StringNullableListFilter
    companyId: StringNullableFilter
    services: ServiceListRelationFilter
    masters: MasterListRelationFilter
    company: CompanyNullableRelationFilter
  }

  input ScheduleOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    week: SortOrder
    times: SortOrder
    companyId: SortOrderInput
    _count: ScheduleCountOrderByAggregateInput
    _max: ScheduleMaxOrderByAggregateInput
    _min: ScheduleMinOrderByAggregateInput
  }

  input ScheduleScalarWhereWithAggregatesInput {
    AND: [ScheduleScalarWhereWithAggregatesInput!]
    OR: [ScheduleScalarWhereWithAggregatesInput!]
    NOT: [ScheduleScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    week: StringNullableListFilter
    times: StringNullableListFilter
    companyId: StringNullableWithAggregatesFilter
  }

  input RequestWhereInput {
    AND: [RequestWhereInput!]
    OR: [RequestWhereInput!]
    NOT: [RequestWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    date: StringFilter
    times: StringNullableListFilter
    price: IntNullableFilter
    status: StringFilter
    rating: IntFilter
    review: StringNullableFilter
    code: StringFilter
    companyId: StringNullableFilter
    userId: StringNullableFilter
    masterId: StringNullableFilter
    categoryId: StringNullableFilter
    company: CompanyNullableRelationFilter
    user: UserNullableRelationFilter
    master: MasterNullableRelationFilter
    category: CategoryNullableRelationFilter
  }

  input RequestOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    date: SortOrder
    times: SortOrder
    price: SortOrderInput
    status: SortOrder
    rating: SortOrder
    review: SortOrderInput
    code: SortOrder
    companyId: SortOrderInput
    userId: SortOrderInput
    masterId: SortOrderInput
    categoryId: SortOrderInput
    company: CompanyOrderByWithRelationInput
    user: UserOrderByWithRelationInput
    master: MasterOrderByWithRelationInput
    category: CategoryOrderByWithRelationInput
  }

  input RequestWhereUniqueInput {
    id: String
    AND: [RequestWhereInput!]
    OR: [RequestWhereInput!]
    NOT: [RequestWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    date: StringFilter
    times: StringNullableListFilter
    price: IntNullableFilter
    status: StringFilter
    rating: IntFilter
    review: StringNullableFilter
    code: StringFilter
    companyId: StringNullableFilter
    userId: StringNullableFilter
    masterId: StringNullableFilter
    categoryId: StringNullableFilter
    company: CompanyNullableRelationFilter
    user: UserNullableRelationFilter
    master: MasterNullableRelationFilter
    category: CategoryNullableRelationFilter
  }

  input RequestOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    date: SortOrder
    times: SortOrder
    price: SortOrderInput
    status: SortOrder
    rating: SortOrder
    review: SortOrderInput
    code: SortOrder
    companyId: SortOrderInput
    userId: SortOrderInput
    masterId: SortOrderInput
    categoryId: SortOrderInput
    _count: RequestCountOrderByAggregateInput
    _avg: RequestAvgOrderByAggregateInput
    _max: RequestMaxOrderByAggregateInput
    _min: RequestMinOrderByAggregateInput
    _sum: RequestSumOrderByAggregateInput
  }

  input RequestScalarWhereWithAggregatesInput {
    AND: [RequestScalarWhereWithAggregatesInput!]
    OR: [RequestScalarWhereWithAggregatesInput!]
    NOT: [RequestScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    date: StringWithAggregatesFilter
    times: StringNullableListFilter
    price: IntNullableWithAggregatesFilter
    status: StringWithAggregatesFilter
    rating: IntWithAggregatesFilter
    review: StringNullableWithAggregatesFilter
    code: StringWithAggregatesFilter
    companyId: StringNullableWithAggregatesFilter
    userId: StringNullableWithAggregatesFilter
    masterId: StringNullableWithAggregatesFilter
    categoryId: StringNullableWithAggregatesFilter
  }

  input CategoryWhereInput {
    AND: [CategoryWhereInput!]
    OR: [CategoryWhereInput!]
    NOT: [CategoryWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringFilter
    subcategory: StringNullableFilter
    services: ServiceListRelationFilter
    requests: RequestListRelationFilter
  }

  input CategoryOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    subcategory: SortOrderInput
    services: ServiceOrderByRelationAggregateInput
    requests: RequestOrderByRelationAggregateInput
  }

  input CategoryWhereUniqueInput {
    id: String
    AND: [CategoryWhereInput!]
    OR: [CategoryWhereInput!]
    NOT: [CategoryWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringFilter
    subcategory: StringNullableFilter
    services: ServiceListRelationFilter
    requests: RequestListRelationFilter
  }

  input CategoryOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    subcategory: SortOrderInput
    _count: CategoryCountOrderByAggregateInput
    _max: CategoryMaxOrderByAggregateInput
    _min: CategoryMinOrderByAggregateInput
  }

  input CategoryScalarWhereWithAggregatesInput {
    AND: [CategoryScalarWhereWithAggregatesInput!]
    OR: [CategoryScalarWhereWithAggregatesInput!]
    NOT: [CategoryScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    name: StringWithAggregatesFilter
    subcategory: StringNullableWithAggregatesFilter
  }

  input PromotionWhereInput {
    AND: [PromotionWhereInput!]
    OR: [PromotionWhereInput!]
    NOT: [PromotionWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringFilter
    text: StringFilter
    image: StringFilter
  }

  input PromotionOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    text: SortOrder
    image: SortOrder
  }

  input PromotionWhereUniqueInput {
    id: String
    AND: [PromotionWhereInput!]
    OR: [PromotionWhereInput!]
    NOT: [PromotionWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringFilter
    text: StringFilter
    image: StringFilter
  }

  input PromotionOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    text: SortOrder
    image: SortOrder
    _count: PromotionCountOrderByAggregateInput
    _max: PromotionMaxOrderByAggregateInput
    _min: PromotionMinOrderByAggregateInput
  }

  input PromotionScalarWhereWithAggregatesInput {
    AND: [PromotionScalarWhereWithAggregatesInput!]
    OR: [PromotionScalarWhereWithAggregatesInput!]
    NOT: [PromotionScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    name: StringWithAggregatesFilter
    text: StringWithAggregatesFilter
    image: StringWithAggregatesFilter
  }

  input UserCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    phone: String!
    code: String
    name: String
    pushId: String
    requests: RequestCreateNestedManyWithoutUserInput
  }

  input UserUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    phone: String!
    code: String
    name: String
    pushId: String
    requests: RequestUncheckedCreateNestedManyWithoutUserInput
  }

  input UserUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    phone: StringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    pushId: NullableStringFieldUpdateOperationsInput
    requests: RequestUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    phone: StringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    pushId: NullableStringFieldUpdateOperationsInput
    requests: RequestUncheckedUpdateManyWithoutUserNestedInput
  }

  input UserCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    phone: String!
    code: String
    name: String
    pushId: String
  }

  input UserUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    phone: StringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    pushId: NullableStringFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    phone: StringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    pushId: NullableStringFieldUpdateOperationsInput
  }

  input AdminCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    login: String!
    password: String!
  }

  input AdminUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    login: String!
    password: String!
  }

  input AdminUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    login: StringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
  }

  input AdminUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    login: StringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
  }

  input AdminCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    login: String!
    password: String!
  }

  input AdminUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    login: StringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
  }

  input AdminUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    login: StringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
  }

  input CompanyCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    requests: RequestCreateNestedManyWithoutCompanyInput
    services: ServiceCreateNestedManyWithoutCompanyInput
    masters: MasterCreateNestedManyWithoutCompanyInput
    schedules: ScheduleCreateNestedManyWithoutCompanyInput
  }

  input CompanyUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    requests: RequestUncheckedCreateNestedManyWithoutCompanyInput
    services: ServiceUncheckedCreateNestedManyWithoutCompanyInput
    masters: MasterUncheckedCreateNestedManyWithoutCompanyInput
    schedules: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
  }

  input CompanyUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    requests: RequestUpdateManyWithoutCompanyNestedInput
    services: ServiceUpdateManyWithoutCompanyNestedInput
    masters: MasterUpdateManyWithoutCompanyNestedInput
    schedules: ScheduleUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    requests: RequestUncheckedUpdateManyWithoutCompanyNestedInput
    services: ServiceUncheckedUpdateManyWithoutCompanyNestedInput
    masters: MasterUncheckedUpdateManyWithoutCompanyNestedInput
    schedules: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  input CompanyCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
  }

  input CompanyUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
  }

  input CompanyUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
  }

  input MasterCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    company: CompanyCreateNestedOneWithoutMastersInput
    request: RequestCreateNestedManyWithoutMasterInput
    schedules: ScheduleCreateNestedManyWithoutMastersInput
  }

  input MasterUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    companyId: String
    request: RequestUncheckedCreateNestedManyWithoutMasterInput
    schedules: ScheduleUncheckedCreateNestedManyWithoutMastersInput
  }

  input MasterUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneWithoutMastersNestedInput
    request: RequestUpdateManyWithoutMasterNestedInput
    schedules: ScheduleUpdateManyWithoutMastersNestedInput
  }

  input MasterUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    request: RequestUncheckedUpdateManyWithoutMasterNestedInput
    schedules: ScheduleUncheckedUpdateManyWithoutMastersNestedInput
  }

  input MasterCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    companyId: String
  }

  input MasterUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
  }

  input MasterUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
  }

  input ServiceCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    schedules: ScheduleCreateNestedManyWithoutServicesInput
    company: CompanyCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
  }

  input ServiceUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    companyId: String
    categoryId: String
    schedules: ScheduleUncheckedCreateNestedManyWithoutServicesInput
  }

  input ServiceUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    schedules: ScheduleUpdateManyWithoutServicesNestedInput
    company: CompanyUpdateOneWithoutServicesNestedInput
    category: CategoryUpdateOneWithoutServicesNestedInput
  }

  input ServiceUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
    schedules: ScheduleUncheckedUpdateManyWithoutServicesNestedInput
  }

  input ServiceCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    companyId: String
    categoryId: String
  }

  input ServiceUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
  }

  input ServiceUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input ScheduleCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    services: ServiceCreateNestedManyWithoutSchedulesInput
    masters: MasterCreateNestedManyWithoutSchedulesInput
    company: CompanyCreateNestedOneWithoutSchedulesInput
  }

  input ScheduleUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    companyId: String
    services: ServiceUncheckedCreateNestedManyWithoutSchedulesInput
    masters: MasterUncheckedCreateNestedManyWithoutSchedulesInput
  }

  input ScheduleUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    services: ServiceUpdateManyWithoutSchedulesNestedInput
    masters: MasterUpdateManyWithoutSchedulesNestedInput
    company: CompanyUpdateOneWithoutSchedulesNestedInput
  }

  input ScheduleUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    companyId: NullableStringFieldUpdateOperationsInput
    services: ServiceUncheckedUpdateManyWithoutSchedulesNestedInput
    masters: MasterUncheckedUpdateManyWithoutSchedulesNestedInput
  }

  input ScheduleCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    companyId: String
  }

  input ScheduleUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
  }

  input ScheduleUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    companyId: NullableStringFieldUpdateOperationsInput
  }

  input RequestCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    company: CompanyCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
    master: MasterCreateNestedOneWithoutRequestInput
    category: CategoryCreateNestedOneWithoutRequestsInput
  }

  input RequestUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    userId: String
    masterId: String
    categoryId: String
  }

  input RequestUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneWithoutRequestsNestedInput
    user: UserUpdateOneWithoutRequestsNestedInput
    master: MasterUpdateOneWithoutRequestNestedInput
    category: CategoryUpdateOneWithoutRequestsNestedInput
  }

  input RequestUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    userId: NullableStringFieldUpdateOperationsInput
    masterId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input RequestCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    userId: String
    masterId: String
    categoryId: String
  }

  input RequestUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
  }

  input RequestUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    userId: NullableStringFieldUpdateOperationsInput
    masterId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input CategoryCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    subcategory: String
    services: ServiceCreateNestedManyWithoutCategoryInput
    requests: RequestCreateNestedManyWithoutCategoryInput
  }

  input CategoryUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    subcategory: String
    services: ServiceUncheckedCreateNestedManyWithoutCategoryInput
    requests: RequestUncheckedCreateNestedManyWithoutCategoryInput
  }

  input CategoryUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    subcategory: NullableStringFieldUpdateOperationsInput
    services: ServiceUpdateManyWithoutCategoryNestedInput
    requests: RequestUpdateManyWithoutCategoryNestedInput
  }

  input CategoryUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    subcategory: NullableStringFieldUpdateOperationsInput
    services: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
    requests: RequestUncheckedUpdateManyWithoutCategoryNestedInput
  }

  input CategoryCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    subcategory: String
  }

  input CategoryUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    subcategory: NullableStringFieldUpdateOperationsInput
  }

  input CategoryUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    subcategory: NullableStringFieldUpdateOperationsInput
  }

  input PromotionCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    text: String!
    image: String!
  }

  input PromotionUncheckedCreateInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    text: String!
    image: String!
  }

  input PromotionUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    text: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
  }

  input PromotionUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    text: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
  }

  input PromotionCreateManyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    text: String!
    image: String!
  }

  input PromotionUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    text: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
  }

  input PromotionUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    text: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringFilter
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableFilter
  }

  input RequestListRelationFilter {
    every: RequestWhereInput
    some: RequestWhereInput
    none: RequestWhereInput
  }

  input SortOrderInput {
    sort: SortOrder!
    nulls: NullsOrder
  }

  input RequestOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    phone: SortOrder
    code: SortOrder
    name: SortOrder
    pushId: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    phone: SortOrder
    code: SortOrder
    name: SortOrder
    pushId: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    phone: SortOrder
    code: SortOrder
    name: SortOrder
    pushId: SortOrder
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input AdminCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    login: SortOrder
    password: SortOrder
  }

  input AdminMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    login: SortOrder
    password: SortOrder
  }

  input AdminMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    login: SortOrder
    password: SortOrder
  }

  input StringNullableListFilter {
    equals: [String!]
    has: String
    hasEvery: [String!]
    hasSome: [String!]
    isEmpty: Boolean
  }

  input ServiceListRelationFilter {
    every: ServiceWhereInput
    some: ServiceWhereInput
    none: ServiceWhereInput
  }

  input MasterListRelationFilter {
    every: MasterWhereInput
    some: MasterWhereInput
    none: MasterWhereInput
  }

  input ScheduleListRelationFilter {
    every: ScheduleWhereInput
    some: ScheduleWhereInput
    none: ScheduleWhereInput
  }

  input ServiceOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input MasterOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input ScheduleOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input CompanyCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    email: SortOrder
    phone: SortOrder
    whatsapp: SortOrder
    password: SortOrder
    repassword: SortOrder
    name: SortOrder
    description: SortOrder
    city: SortOrder
    location: SortOrder
    address: SortOrder
    avatar: SortOrder
    images: SortOrder
  }

  input CompanyMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    email: SortOrder
    phone: SortOrder
    whatsapp: SortOrder
    password: SortOrder
    repassword: SortOrder
    name: SortOrder
    description: SortOrder
    city: SortOrder
    location: SortOrder
    address: SortOrder
    avatar: SortOrder
  }

  input CompanyMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    email: SortOrder
    phone: SortOrder
    whatsapp: SortOrder
    password: SortOrder
    repassword: SortOrder
    name: SortOrder
    description: SortOrder
    city: SortOrder
    location: SortOrder
    address: SortOrder
    avatar: SortOrder
  }

  input CompanyNullableRelationFilter {
    is: CompanyWhereInput
    isNot: CompanyWhereInput
  }

  input MasterCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    description: SortOrder
    image: SortOrder
    companyId: SortOrder
  }

  input MasterMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    description: SortOrder
    image: SortOrder
    companyId: SortOrder
  }

  input MasterMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    description: SortOrder
    image: SortOrder
    companyId: SortOrder
  }

  input IntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input CategoryNullableRelationFilter {
    is: CategoryWhereInput
    isNot: CategoryWhereInput
  }

  input ServiceCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    price: SortOrder
    companyId: SortOrder
    categoryId: SortOrder
  }

  input ServiceAvgOrderByAggregateInput {
    price: SortOrder
  }

  input ServiceMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    price: SortOrder
    companyId: SortOrder
    categoryId: SortOrder
  }

  input ServiceMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    price: SortOrder
    companyId: SortOrder
    categoryId: SortOrder
  }

  input ServiceSumOrderByAggregateInput {
    price: SortOrder
  }

  input IntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input ScheduleCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    week: SortOrder
    times: SortOrder
    companyId: SortOrder
  }

  input ScheduleMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    companyId: SortOrder
  }

  input ScheduleMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    companyId: SortOrder
  }

  input IntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input UserNullableRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input MasterNullableRelationFilter {
    is: MasterWhereInput
    isNot: MasterWhereInput
  }

  input RequestCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    date: SortOrder
    times: SortOrder
    price: SortOrder
    status: SortOrder
    rating: SortOrder
    review: SortOrder
    code: SortOrder
    companyId: SortOrder
    userId: SortOrder
    masterId: SortOrder
    categoryId: SortOrder
  }

  input RequestAvgOrderByAggregateInput {
    price: SortOrder
    rating: SortOrder
  }

  input RequestMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    date: SortOrder
    price: SortOrder
    status: SortOrder
    rating: SortOrder
    review: SortOrder
    code: SortOrder
    companyId: SortOrder
    userId: SortOrder
    masterId: SortOrder
    categoryId: SortOrder
  }

  input RequestMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    date: SortOrder
    price: SortOrder
    status: SortOrder
    rating: SortOrder
    review: SortOrder
    code: SortOrder
    companyId: SortOrder
    userId: SortOrder
    masterId: SortOrder
    categoryId: SortOrder
  }

  input RequestSumOrderByAggregateInput {
    price: SortOrder
    rating: SortOrder
  }

  input IntNullableWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _avg: NestedFloatNullableFilter
    _sum: NestedIntNullableFilter
    _min: NestedIntNullableFilter
    _max: NestedIntNullableFilter
  }

  input CategoryCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    subcategory: SortOrder
  }

  input CategoryMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    subcategory: SortOrder
  }

  input CategoryMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    subcategory: SortOrder
  }

  input PromotionCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    text: SortOrder
    image: SortOrder
  }

  input PromotionMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    text: SortOrder
    image: SortOrder
  }

  input PromotionMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    name: SortOrder
    text: SortOrder
    image: SortOrder
  }

  input RequestCreateNestedManyWithoutUserInput {
    create: [RequestCreateWithoutUserInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutUserInput!]
    createMany: RequestCreateManyUserInputEnvelope
    connect: [RequestWhereUniqueInput!]
  }

  input RequestUncheckedCreateNestedManyWithoutUserInput {
    create: [RequestCreateWithoutUserInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutUserInput!]
    createMany: RequestCreateManyUserInputEnvelope
    connect: [RequestWhereUniqueInput!]
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input RequestUpdateManyWithoutUserNestedInput {
    create: [RequestCreateWithoutUserInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutUserInput!]
    upsert: [RequestUpsertWithWhereUniqueWithoutUserInput!]
    createMany: RequestCreateManyUserInputEnvelope
    set: [RequestWhereUniqueInput!]
    disconnect: [RequestWhereUniqueInput!]
    delete: [RequestWhereUniqueInput!]
    connect: [RequestWhereUniqueInput!]
    update: [RequestUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [RequestUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [RequestScalarWhereInput!]
  }

  input RequestUncheckedUpdateManyWithoutUserNestedInput {
    create: [RequestCreateWithoutUserInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutUserInput!]
    upsert: [RequestUpsertWithWhereUniqueWithoutUserInput!]
    createMany: RequestCreateManyUserInputEnvelope
    set: [RequestWhereUniqueInput!]
    disconnect: [RequestWhereUniqueInput!]
    delete: [RequestWhereUniqueInput!]
    connect: [RequestWhereUniqueInput!]
    update: [RequestUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [RequestUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [RequestScalarWhereInput!]
  }

  input CompanyCreateimagesInput {
    set: [String!]!
  }

  input RequestCreateNestedManyWithoutCompanyInput {
    create: [RequestCreateWithoutCompanyInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutCompanyInput!]
    createMany: RequestCreateManyCompanyInputEnvelope
    connect: [RequestWhereUniqueInput!]
  }

  input ServiceCreateNestedManyWithoutCompanyInput {
    create: [ServiceCreateWithoutCompanyInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutCompanyInput!]
    createMany: ServiceCreateManyCompanyInputEnvelope
    connect: [ServiceWhereUniqueInput!]
  }

  input MasterCreateNestedManyWithoutCompanyInput {
    create: [MasterCreateWithoutCompanyInput!]
    connectOrCreate: [MasterCreateOrConnectWithoutCompanyInput!]
    createMany: MasterCreateManyCompanyInputEnvelope
    connect: [MasterWhereUniqueInput!]
  }

  input ScheduleCreateNestedManyWithoutCompanyInput {
    create: [ScheduleCreateWithoutCompanyInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutCompanyInput!]
    createMany: ScheduleCreateManyCompanyInputEnvelope
    connect: [ScheduleWhereUniqueInput!]
  }

  input RequestUncheckedCreateNestedManyWithoutCompanyInput {
    create: [RequestCreateWithoutCompanyInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutCompanyInput!]
    createMany: RequestCreateManyCompanyInputEnvelope
    connect: [RequestWhereUniqueInput!]
  }

  input ServiceUncheckedCreateNestedManyWithoutCompanyInput {
    create: [ServiceCreateWithoutCompanyInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutCompanyInput!]
    createMany: ServiceCreateManyCompanyInputEnvelope
    connect: [ServiceWhereUniqueInput!]
  }

  input MasterUncheckedCreateNestedManyWithoutCompanyInput {
    create: [MasterCreateWithoutCompanyInput!]
    connectOrCreate: [MasterCreateOrConnectWithoutCompanyInput!]
    createMany: MasterCreateManyCompanyInputEnvelope
    connect: [MasterWhereUniqueInput!]
  }

  input ScheduleUncheckedCreateNestedManyWithoutCompanyInput {
    create: [ScheduleCreateWithoutCompanyInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutCompanyInput!]
    createMany: ScheduleCreateManyCompanyInputEnvelope
    connect: [ScheduleWhereUniqueInput!]
  }

  input CompanyUpdateimagesInput {
    set: [String!]
    push: [String!]
  }

  input RequestUpdateManyWithoutCompanyNestedInput {
    create: [RequestCreateWithoutCompanyInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutCompanyInput!]
    upsert: [RequestUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: RequestCreateManyCompanyInputEnvelope
    set: [RequestWhereUniqueInput!]
    disconnect: [RequestWhereUniqueInput!]
    delete: [RequestWhereUniqueInput!]
    connect: [RequestWhereUniqueInput!]
    update: [RequestUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [RequestUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [RequestScalarWhereInput!]
  }

  input ServiceUpdateManyWithoutCompanyNestedInput {
    create: [ServiceCreateWithoutCompanyInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutCompanyInput!]
    upsert: [ServiceUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: ServiceCreateManyCompanyInputEnvelope
    set: [ServiceWhereUniqueInput!]
    disconnect: [ServiceWhereUniqueInput!]
    delete: [ServiceWhereUniqueInput!]
    connect: [ServiceWhereUniqueInput!]
    update: [ServiceUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [ServiceUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [ServiceScalarWhereInput!]
  }

  input MasterUpdateManyWithoutCompanyNestedInput {
    create: [MasterCreateWithoutCompanyInput!]
    connectOrCreate: [MasterCreateOrConnectWithoutCompanyInput!]
    upsert: [MasterUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: MasterCreateManyCompanyInputEnvelope
    set: [MasterWhereUniqueInput!]
    disconnect: [MasterWhereUniqueInput!]
    delete: [MasterWhereUniqueInput!]
    connect: [MasterWhereUniqueInput!]
    update: [MasterUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [MasterUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [MasterScalarWhereInput!]
  }

  input ScheduleUpdateManyWithoutCompanyNestedInput {
    create: [ScheduleCreateWithoutCompanyInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutCompanyInput!]
    upsert: [ScheduleUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: ScheduleCreateManyCompanyInputEnvelope
    set: [ScheduleWhereUniqueInput!]
    disconnect: [ScheduleWhereUniqueInput!]
    delete: [ScheduleWhereUniqueInput!]
    connect: [ScheduleWhereUniqueInput!]
    update: [ScheduleUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [ScheduleUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [ScheduleScalarWhereInput!]
  }

  input RequestUncheckedUpdateManyWithoutCompanyNestedInput {
    create: [RequestCreateWithoutCompanyInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutCompanyInput!]
    upsert: [RequestUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: RequestCreateManyCompanyInputEnvelope
    set: [RequestWhereUniqueInput!]
    disconnect: [RequestWhereUniqueInput!]
    delete: [RequestWhereUniqueInput!]
    connect: [RequestWhereUniqueInput!]
    update: [RequestUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [RequestUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [RequestScalarWhereInput!]
  }

  input ServiceUncheckedUpdateManyWithoutCompanyNestedInput {
    create: [ServiceCreateWithoutCompanyInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutCompanyInput!]
    upsert: [ServiceUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: ServiceCreateManyCompanyInputEnvelope
    set: [ServiceWhereUniqueInput!]
    disconnect: [ServiceWhereUniqueInput!]
    delete: [ServiceWhereUniqueInput!]
    connect: [ServiceWhereUniqueInput!]
    update: [ServiceUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [ServiceUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [ServiceScalarWhereInput!]
  }

  input MasterUncheckedUpdateManyWithoutCompanyNestedInput {
    create: [MasterCreateWithoutCompanyInput!]
    connectOrCreate: [MasterCreateOrConnectWithoutCompanyInput!]
    upsert: [MasterUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: MasterCreateManyCompanyInputEnvelope
    set: [MasterWhereUniqueInput!]
    disconnect: [MasterWhereUniqueInput!]
    delete: [MasterWhereUniqueInput!]
    connect: [MasterWhereUniqueInput!]
    update: [MasterUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [MasterUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [MasterScalarWhereInput!]
  }

  input ScheduleUncheckedUpdateManyWithoutCompanyNestedInput {
    create: [ScheduleCreateWithoutCompanyInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutCompanyInput!]
    upsert: [ScheduleUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: ScheduleCreateManyCompanyInputEnvelope
    set: [ScheduleWhereUniqueInput!]
    disconnect: [ScheduleWhereUniqueInput!]
    delete: [ScheduleWhereUniqueInput!]
    connect: [ScheduleWhereUniqueInput!]
    update: [ScheduleUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [ScheduleUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [ScheduleScalarWhereInput!]
  }

  input CompanyCreateNestedOneWithoutMastersInput {
    create: CompanyCreateWithoutMastersInput
    connectOrCreate: CompanyCreateOrConnectWithoutMastersInput
    connect: CompanyWhereUniqueInput
  }

  input RequestCreateNestedManyWithoutMasterInput {
    create: [RequestCreateWithoutMasterInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutMasterInput!]
    createMany: RequestCreateManyMasterInputEnvelope
    connect: [RequestWhereUniqueInput!]
  }

  input ScheduleCreateNestedManyWithoutMastersInput {
    create: [ScheduleCreateWithoutMastersInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutMastersInput!]
    connect: [ScheduleWhereUniqueInput!]
  }

  input RequestUncheckedCreateNestedManyWithoutMasterInput {
    create: [RequestCreateWithoutMasterInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutMasterInput!]
    createMany: RequestCreateManyMasterInputEnvelope
    connect: [RequestWhereUniqueInput!]
  }

  input ScheduleUncheckedCreateNestedManyWithoutMastersInput {
    create: [ScheduleCreateWithoutMastersInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutMastersInput!]
    connect: [ScheduleWhereUniqueInput!]
  }

  input CompanyUpdateOneWithoutMastersNestedInput {
    create: CompanyCreateWithoutMastersInput
    connectOrCreate: CompanyCreateOrConnectWithoutMastersInput
    upsert: CompanyUpsertWithoutMastersInput
    disconnect: CompanyWhereInput
    delete: CompanyWhereInput
    connect: CompanyWhereUniqueInput
    update: CompanyUpdateToOneWithWhereWithoutMastersInput
  }

  input RequestUpdateManyWithoutMasterNestedInput {
    create: [RequestCreateWithoutMasterInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutMasterInput!]
    upsert: [RequestUpsertWithWhereUniqueWithoutMasterInput!]
    createMany: RequestCreateManyMasterInputEnvelope
    set: [RequestWhereUniqueInput!]
    disconnect: [RequestWhereUniqueInput!]
    delete: [RequestWhereUniqueInput!]
    connect: [RequestWhereUniqueInput!]
    update: [RequestUpdateWithWhereUniqueWithoutMasterInput!]
    updateMany: [RequestUpdateManyWithWhereWithoutMasterInput!]
    deleteMany: [RequestScalarWhereInput!]
  }

  input ScheduleUpdateManyWithoutMastersNestedInput {
    create: [ScheduleCreateWithoutMastersInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutMastersInput!]
    upsert: [ScheduleUpsertWithWhereUniqueWithoutMastersInput!]
    set: [ScheduleWhereUniqueInput!]
    disconnect: [ScheduleWhereUniqueInput!]
    delete: [ScheduleWhereUniqueInput!]
    connect: [ScheduleWhereUniqueInput!]
    update: [ScheduleUpdateWithWhereUniqueWithoutMastersInput!]
    updateMany: [ScheduleUpdateManyWithWhereWithoutMastersInput!]
    deleteMany: [ScheduleScalarWhereInput!]
  }

  input RequestUncheckedUpdateManyWithoutMasterNestedInput {
    create: [RequestCreateWithoutMasterInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutMasterInput!]
    upsert: [RequestUpsertWithWhereUniqueWithoutMasterInput!]
    createMany: RequestCreateManyMasterInputEnvelope
    set: [RequestWhereUniqueInput!]
    disconnect: [RequestWhereUniqueInput!]
    delete: [RequestWhereUniqueInput!]
    connect: [RequestWhereUniqueInput!]
    update: [RequestUpdateWithWhereUniqueWithoutMasterInput!]
    updateMany: [RequestUpdateManyWithWhereWithoutMasterInput!]
    deleteMany: [RequestScalarWhereInput!]
  }

  input ScheduleUncheckedUpdateManyWithoutMastersNestedInput {
    create: [ScheduleCreateWithoutMastersInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutMastersInput!]
    upsert: [ScheduleUpsertWithWhereUniqueWithoutMastersInput!]
    set: [ScheduleWhereUniqueInput!]
    disconnect: [ScheduleWhereUniqueInput!]
    delete: [ScheduleWhereUniqueInput!]
    connect: [ScheduleWhereUniqueInput!]
    update: [ScheduleUpdateWithWhereUniqueWithoutMastersInput!]
    updateMany: [ScheduleUpdateManyWithWhereWithoutMastersInput!]
    deleteMany: [ScheduleScalarWhereInput!]
  }

  input ScheduleCreateNestedManyWithoutServicesInput {
    create: [ScheduleCreateWithoutServicesInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutServicesInput!]
    connect: [ScheduleWhereUniqueInput!]
  }

  input CompanyCreateNestedOneWithoutServicesInput {
    create: CompanyCreateWithoutServicesInput
    connectOrCreate: CompanyCreateOrConnectWithoutServicesInput
    connect: CompanyWhereUniqueInput
  }

  input CategoryCreateNestedOneWithoutServicesInput {
    create: CategoryCreateWithoutServicesInput
    connectOrCreate: CategoryCreateOrConnectWithoutServicesInput
    connect: CategoryWhereUniqueInput
  }

  input ScheduleUncheckedCreateNestedManyWithoutServicesInput {
    create: [ScheduleCreateWithoutServicesInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutServicesInput!]
    connect: [ScheduleWhereUniqueInput!]
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input ScheduleUpdateManyWithoutServicesNestedInput {
    create: [ScheduleCreateWithoutServicesInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutServicesInput!]
    upsert: [ScheduleUpsertWithWhereUniqueWithoutServicesInput!]
    set: [ScheduleWhereUniqueInput!]
    disconnect: [ScheduleWhereUniqueInput!]
    delete: [ScheduleWhereUniqueInput!]
    connect: [ScheduleWhereUniqueInput!]
    update: [ScheduleUpdateWithWhereUniqueWithoutServicesInput!]
    updateMany: [ScheduleUpdateManyWithWhereWithoutServicesInput!]
    deleteMany: [ScheduleScalarWhereInput!]
  }

  input CompanyUpdateOneWithoutServicesNestedInput {
    create: CompanyCreateWithoutServicesInput
    connectOrCreate: CompanyCreateOrConnectWithoutServicesInput
    upsert: CompanyUpsertWithoutServicesInput
    disconnect: CompanyWhereInput
    delete: CompanyWhereInput
    connect: CompanyWhereUniqueInput
    update: CompanyUpdateToOneWithWhereWithoutServicesInput
  }

  input CategoryUpdateOneWithoutServicesNestedInput {
    create: CategoryCreateWithoutServicesInput
    connectOrCreate: CategoryCreateOrConnectWithoutServicesInput
    upsert: CategoryUpsertWithoutServicesInput
    disconnect: CategoryWhereInput
    delete: CategoryWhereInput
    connect: CategoryWhereUniqueInput
    update: CategoryUpdateToOneWithWhereWithoutServicesInput
  }

  input ScheduleUncheckedUpdateManyWithoutServicesNestedInput {
    create: [ScheduleCreateWithoutServicesInput!]
    connectOrCreate: [ScheduleCreateOrConnectWithoutServicesInput!]
    upsert: [ScheduleUpsertWithWhereUniqueWithoutServicesInput!]
    set: [ScheduleWhereUniqueInput!]
    disconnect: [ScheduleWhereUniqueInput!]
    delete: [ScheduleWhereUniqueInput!]
    connect: [ScheduleWhereUniqueInput!]
    update: [ScheduleUpdateWithWhereUniqueWithoutServicesInput!]
    updateMany: [ScheduleUpdateManyWithWhereWithoutServicesInput!]
    deleteMany: [ScheduleScalarWhereInput!]
  }

  input ScheduleCreateweekInput {
    set: [String!]!
  }

  input ScheduleCreatetimesInput {
    set: [String!]!
  }

  input ServiceCreateNestedManyWithoutSchedulesInput {
    create: [ServiceCreateWithoutSchedulesInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutSchedulesInput!]
    connect: [ServiceWhereUniqueInput!]
  }

  input MasterCreateNestedManyWithoutSchedulesInput {
    create: [MasterCreateWithoutSchedulesInput!]
    connectOrCreate: [MasterCreateOrConnectWithoutSchedulesInput!]
    connect: [MasterWhereUniqueInput!]
  }

  input CompanyCreateNestedOneWithoutSchedulesInput {
    create: CompanyCreateWithoutSchedulesInput
    connectOrCreate: CompanyCreateOrConnectWithoutSchedulesInput
    connect: CompanyWhereUniqueInput
  }

  input ServiceUncheckedCreateNestedManyWithoutSchedulesInput {
    create: [ServiceCreateWithoutSchedulesInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutSchedulesInput!]
    connect: [ServiceWhereUniqueInput!]
  }

  input MasterUncheckedCreateNestedManyWithoutSchedulesInput {
    create: [MasterCreateWithoutSchedulesInput!]
    connectOrCreate: [MasterCreateOrConnectWithoutSchedulesInput!]
    connect: [MasterWhereUniqueInput!]
  }

  input ScheduleUpdateweekInput {
    set: [String!]
    push: [String!]
  }

  input ScheduleUpdatetimesInput {
    set: [String!]
    push: [String!]
  }

  input ServiceUpdateManyWithoutSchedulesNestedInput {
    create: [ServiceCreateWithoutSchedulesInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutSchedulesInput!]
    upsert: [ServiceUpsertWithWhereUniqueWithoutSchedulesInput!]
    set: [ServiceWhereUniqueInput!]
    disconnect: [ServiceWhereUniqueInput!]
    delete: [ServiceWhereUniqueInput!]
    connect: [ServiceWhereUniqueInput!]
    update: [ServiceUpdateWithWhereUniqueWithoutSchedulesInput!]
    updateMany: [ServiceUpdateManyWithWhereWithoutSchedulesInput!]
    deleteMany: [ServiceScalarWhereInput!]
  }

  input MasterUpdateManyWithoutSchedulesNestedInput {
    create: [MasterCreateWithoutSchedulesInput!]
    connectOrCreate: [MasterCreateOrConnectWithoutSchedulesInput!]
    upsert: [MasterUpsertWithWhereUniqueWithoutSchedulesInput!]
    set: [MasterWhereUniqueInput!]
    disconnect: [MasterWhereUniqueInput!]
    delete: [MasterWhereUniqueInput!]
    connect: [MasterWhereUniqueInput!]
    update: [MasterUpdateWithWhereUniqueWithoutSchedulesInput!]
    updateMany: [MasterUpdateManyWithWhereWithoutSchedulesInput!]
    deleteMany: [MasterScalarWhereInput!]
  }

  input CompanyUpdateOneWithoutSchedulesNestedInput {
    create: CompanyCreateWithoutSchedulesInput
    connectOrCreate: CompanyCreateOrConnectWithoutSchedulesInput
    upsert: CompanyUpsertWithoutSchedulesInput
    disconnect: CompanyWhereInput
    delete: CompanyWhereInput
    connect: CompanyWhereUniqueInput
    update: CompanyUpdateToOneWithWhereWithoutSchedulesInput
  }

  input ServiceUncheckedUpdateManyWithoutSchedulesNestedInput {
    create: [ServiceCreateWithoutSchedulesInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutSchedulesInput!]
    upsert: [ServiceUpsertWithWhereUniqueWithoutSchedulesInput!]
    set: [ServiceWhereUniqueInput!]
    disconnect: [ServiceWhereUniqueInput!]
    delete: [ServiceWhereUniqueInput!]
    connect: [ServiceWhereUniqueInput!]
    update: [ServiceUpdateWithWhereUniqueWithoutSchedulesInput!]
    updateMany: [ServiceUpdateManyWithWhereWithoutSchedulesInput!]
    deleteMany: [ServiceScalarWhereInput!]
  }

  input MasterUncheckedUpdateManyWithoutSchedulesNestedInput {
    create: [MasterCreateWithoutSchedulesInput!]
    connectOrCreate: [MasterCreateOrConnectWithoutSchedulesInput!]
    upsert: [MasterUpsertWithWhereUniqueWithoutSchedulesInput!]
    set: [MasterWhereUniqueInput!]
    disconnect: [MasterWhereUniqueInput!]
    delete: [MasterWhereUniqueInput!]
    connect: [MasterWhereUniqueInput!]
    update: [MasterUpdateWithWhereUniqueWithoutSchedulesInput!]
    updateMany: [MasterUpdateManyWithWhereWithoutSchedulesInput!]
    deleteMany: [MasterScalarWhereInput!]
  }

  input RequestCreatetimesInput {
    set: [String!]!
  }

  input CompanyCreateNestedOneWithoutRequestsInput {
    create: CompanyCreateWithoutRequestsInput
    connectOrCreate: CompanyCreateOrConnectWithoutRequestsInput
    connect: CompanyWhereUniqueInput
  }

  input UserCreateNestedOneWithoutRequestsInput {
    create: UserCreateWithoutRequestsInput
    connectOrCreate: UserCreateOrConnectWithoutRequestsInput
    connect: UserWhereUniqueInput
  }

  input MasterCreateNestedOneWithoutRequestInput {
    create: MasterCreateWithoutRequestInput
    connectOrCreate: MasterCreateOrConnectWithoutRequestInput
    connect: MasterWhereUniqueInput
  }

  input CategoryCreateNestedOneWithoutRequestsInput {
    create: CategoryCreateWithoutRequestsInput
    connectOrCreate: CategoryCreateOrConnectWithoutRequestsInput
    connect: CategoryWhereUniqueInput
  }

  input RequestUpdatetimesInput {
    set: [String!]
    push: [String!]
  }

  input NullableIntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input CompanyUpdateOneWithoutRequestsNestedInput {
    create: CompanyCreateWithoutRequestsInput
    connectOrCreate: CompanyCreateOrConnectWithoutRequestsInput
    upsert: CompanyUpsertWithoutRequestsInput
    disconnect: CompanyWhereInput
    delete: CompanyWhereInput
    connect: CompanyWhereUniqueInput
    update: CompanyUpdateToOneWithWhereWithoutRequestsInput
  }

  input UserUpdateOneWithoutRequestsNestedInput {
    create: UserCreateWithoutRequestsInput
    connectOrCreate: UserCreateOrConnectWithoutRequestsInput
    upsert: UserUpsertWithoutRequestsInput
    disconnect: UserWhereInput
    delete: UserWhereInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutRequestsInput
  }

  input MasterUpdateOneWithoutRequestNestedInput {
    create: MasterCreateWithoutRequestInput
    connectOrCreate: MasterCreateOrConnectWithoutRequestInput
    upsert: MasterUpsertWithoutRequestInput
    disconnect: MasterWhereInput
    delete: MasterWhereInput
    connect: MasterWhereUniqueInput
    update: MasterUpdateToOneWithWhereWithoutRequestInput
  }

  input CategoryUpdateOneWithoutRequestsNestedInput {
    create: CategoryCreateWithoutRequestsInput
    connectOrCreate: CategoryCreateOrConnectWithoutRequestsInput
    upsert: CategoryUpsertWithoutRequestsInput
    disconnect: CategoryWhereInput
    delete: CategoryWhereInput
    connect: CategoryWhereUniqueInput
    update: CategoryUpdateToOneWithWhereWithoutRequestsInput
  }

  input ServiceCreateNestedManyWithoutCategoryInput {
    create: [ServiceCreateWithoutCategoryInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutCategoryInput!]
    createMany: ServiceCreateManyCategoryInputEnvelope
    connect: [ServiceWhereUniqueInput!]
  }

  input RequestCreateNestedManyWithoutCategoryInput {
    create: [RequestCreateWithoutCategoryInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutCategoryInput!]
    createMany: RequestCreateManyCategoryInputEnvelope
    connect: [RequestWhereUniqueInput!]
  }

  input ServiceUncheckedCreateNestedManyWithoutCategoryInput {
    create: [ServiceCreateWithoutCategoryInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutCategoryInput!]
    createMany: ServiceCreateManyCategoryInputEnvelope
    connect: [ServiceWhereUniqueInput!]
  }

  input RequestUncheckedCreateNestedManyWithoutCategoryInput {
    create: [RequestCreateWithoutCategoryInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutCategoryInput!]
    createMany: RequestCreateManyCategoryInputEnvelope
    connect: [RequestWhereUniqueInput!]
  }

  input ServiceUpdateManyWithoutCategoryNestedInput {
    create: [ServiceCreateWithoutCategoryInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutCategoryInput!]
    upsert: [ServiceUpsertWithWhereUniqueWithoutCategoryInput!]
    createMany: ServiceCreateManyCategoryInputEnvelope
    set: [ServiceWhereUniqueInput!]
    disconnect: [ServiceWhereUniqueInput!]
    delete: [ServiceWhereUniqueInput!]
    connect: [ServiceWhereUniqueInput!]
    update: [ServiceUpdateWithWhereUniqueWithoutCategoryInput!]
    updateMany: [ServiceUpdateManyWithWhereWithoutCategoryInput!]
    deleteMany: [ServiceScalarWhereInput!]
  }

  input RequestUpdateManyWithoutCategoryNestedInput {
    create: [RequestCreateWithoutCategoryInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutCategoryInput!]
    upsert: [RequestUpsertWithWhereUniqueWithoutCategoryInput!]
    createMany: RequestCreateManyCategoryInputEnvelope
    set: [RequestWhereUniqueInput!]
    disconnect: [RequestWhereUniqueInput!]
    delete: [RequestWhereUniqueInput!]
    connect: [RequestWhereUniqueInput!]
    update: [RequestUpdateWithWhereUniqueWithoutCategoryInput!]
    updateMany: [RequestUpdateManyWithWhereWithoutCategoryInput!]
    deleteMany: [RequestScalarWhereInput!]
  }

  input ServiceUncheckedUpdateManyWithoutCategoryNestedInput {
    create: [ServiceCreateWithoutCategoryInput!]
    connectOrCreate: [ServiceCreateOrConnectWithoutCategoryInput!]
    upsert: [ServiceUpsertWithWhereUniqueWithoutCategoryInput!]
    createMany: ServiceCreateManyCategoryInputEnvelope
    set: [ServiceWhereUniqueInput!]
    disconnect: [ServiceWhereUniqueInput!]
    delete: [ServiceWhereUniqueInput!]
    connect: [ServiceWhereUniqueInput!]
    update: [ServiceUpdateWithWhereUniqueWithoutCategoryInput!]
    updateMany: [ServiceUpdateManyWithWhereWithoutCategoryInput!]
    deleteMany: [ServiceScalarWhereInput!]
  }

  input RequestUncheckedUpdateManyWithoutCategoryNestedInput {
    create: [RequestCreateWithoutCategoryInput!]
    connectOrCreate: [RequestCreateOrConnectWithoutCategoryInput!]
    upsert: [RequestUpsertWithWhereUniqueWithoutCategoryInput!]
    createMany: RequestCreateManyCategoryInputEnvelope
    set: [RequestWhereUniqueInput!]
    disconnect: [RequestWhereUniqueInput!]
    delete: [RequestWhereUniqueInput!]
    connect: [RequestWhereUniqueInput!]
    update: [RequestUpdateWithWhereUniqueWithoutCategoryInput!]
    updateMany: [RequestUpdateManyWithWhereWithoutCategoryInput!]
    deleteMany: [RequestScalarWhereInput!]
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedIntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input NestedFloatFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatFilter
  }

  input NestedIntNullableWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _avg: NestedFloatNullableFilter
    _sum: NestedIntNullableFilter
    _min: NestedIntNullableFilter
    _max: NestedIntNullableFilter
  }

  input NestedFloatNullableFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatNullableFilter
  }

  input RequestCreateWithoutUserInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    company: CompanyCreateNestedOneWithoutRequestsInput
    master: MasterCreateNestedOneWithoutRequestInput
    category: CategoryCreateNestedOneWithoutRequestsInput
  }

  input RequestUncheckedCreateWithoutUserInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    masterId: String
    categoryId: String
  }

  input RequestCreateOrConnectWithoutUserInput {
    where: RequestWhereUniqueInput!
    create: RequestCreateWithoutUserInput!
  }

  input RequestCreateManyUserInputEnvelope {
    data: [RequestCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input RequestUpsertWithWhereUniqueWithoutUserInput {
    where: RequestWhereUniqueInput!
    update: RequestUpdateWithoutUserInput!
    create: RequestCreateWithoutUserInput!
  }

  input RequestUpdateWithWhereUniqueWithoutUserInput {
    where: RequestWhereUniqueInput!
    data: RequestUpdateWithoutUserInput!
  }

  input RequestUpdateManyWithWhereWithoutUserInput {
    where: RequestScalarWhereInput!
    data: RequestUpdateManyMutationInput!
  }

  input RequestScalarWhereInput {
    AND: [RequestScalarWhereInput!]
    OR: [RequestScalarWhereInput!]
    NOT: [RequestScalarWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    date: StringFilter
    times: StringNullableListFilter
    price: IntNullableFilter
    status: StringFilter
    rating: IntFilter
    review: StringNullableFilter
    code: StringFilter
    companyId: StringNullableFilter
    userId: StringNullableFilter
    masterId: StringNullableFilter
    categoryId: StringNullableFilter
  }

  input RequestCreateWithoutCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    user: UserCreateNestedOneWithoutRequestsInput
    master: MasterCreateNestedOneWithoutRequestInput
    category: CategoryCreateNestedOneWithoutRequestsInput
  }

  input RequestUncheckedCreateWithoutCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    userId: String
    masterId: String
    categoryId: String
  }

  input RequestCreateOrConnectWithoutCompanyInput {
    where: RequestWhereUniqueInput!
    create: RequestCreateWithoutCompanyInput!
  }

  input RequestCreateManyCompanyInputEnvelope {
    data: [RequestCreateManyCompanyInput!]!
    skipDuplicates: Boolean
  }

  input ServiceCreateWithoutCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    schedules: ScheduleCreateNestedManyWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
  }

  input ServiceUncheckedCreateWithoutCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    categoryId: String
    schedules: ScheduleUncheckedCreateNestedManyWithoutServicesInput
  }

  input ServiceCreateOrConnectWithoutCompanyInput {
    where: ServiceWhereUniqueInput!
    create: ServiceCreateWithoutCompanyInput!
  }

  input ServiceCreateManyCompanyInputEnvelope {
    data: [ServiceCreateManyCompanyInput!]!
    skipDuplicates: Boolean
  }

  input MasterCreateWithoutCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    request: RequestCreateNestedManyWithoutMasterInput
    schedules: ScheduleCreateNestedManyWithoutMastersInput
  }

  input MasterUncheckedCreateWithoutCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    request: RequestUncheckedCreateNestedManyWithoutMasterInput
    schedules: ScheduleUncheckedCreateNestedManyWithoutMastersInput
  }

  input MasterCreateOrConnectWithoutCompanyInput {
    where: MasterWhereUniqueInput!
    create: MasterCreateWithoutCompanyInput!
  }

  input MasterCreateManyCompanyInputEnvelope {
    data: [MasterCreateManyCompanyInput!]!
    skipDuplicates: Boolean
  }

  input ScheduleCreateWithoutCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    services: ServiceCreateNestedManyWithoutSchedulesInput
    masters: MasterCreateNestedManyWithoutSchedulesInput
  }

  input ScheduleUncheckedCreateWithoutCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    services: ServiceUncheckedCreateNestedManyWithoutSchedulesInput
    masters: MasterUncheckedCreateNestedManyWithoutSchedulesInput
  }

  input ScheduleCreateOrConnectWithoutCompanyInput {
    where: ScheduleWhereUniqueInput!
    create: ScheduleCreateWithoutCompanyInput!
  }

  input ScheduleCreateManyCompanyInputEnvelope {
    data: [ScheduleCreateManyCompanyInput!]!
    skipDuplicates: Boolean
  }

  input RequestUpsertWithWhereUniqueWithoutCompanyInput {
    where: RequestWhereUniqueInput!
    update: RequestUpdateWithoutCompanyInput!
    create: RequestCreateWithoutCompanyInput!
  }

  input RequestUpdateWithWhereUniqueWithoutCompanyInput {
    where: RequestWhereUniqueInput!
    data: RequestUpdateWithoutCompanyInput!
  }

  input RequestUpdateManyWithWhereWithoutCompanyInput {
    where: RequestScalarWhereInput!
    data: RequestUpdateManyMutationInput!
  }

  input ServiceUpsertWithWhereUniqueWithoutCompanyInput {
    where: ServiceWhereUniqueInput!
    update: ServiceUpdateWithoutCompanyInput!
    create: ServiceCreateWithoutCompanyInput!
  }

  input ServiceUpdateWithWhereUniqueWithoutCompanyInput {
    where: ServiceWhereUniqueInput!
    data: ServiceUpdateWithoutCompanyInput!
  }

  input ServiceUpdateManyWithWhereWithoutCompanyInput {
    where: ServiceScalarWhereInput!
    data: ServiceUpdateManyMutationInput!
  }

  input ServiceScalarWhereInput {
    AND: [ServiceScalarWhereInput!]
    OR: [ServiceScalarWhereInput!]
    NOT: [ServiceScalarWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringNullableFilter
    price: IntFilter
    companyId: StringNullableFilter
    categoryId: StringNullableFilter
  }

  input MasterUpsertWithWhereUniqueWithoutCompanyInput {
    where: MasterWhereUniqueInput!
    update: MasterUpdateWithoutCompanyInput!
    create: MasterCreateWithoutCompanyInput!
  }

  input MasterUpdateWithWhereUniqueWithoutCompanyInput {
    where: MasterWhereUniqueInput!
    data: MasterUpdateWithoutCompanyInput!
  }

  input MasterUpdateManyWithWhereWithoutCompanyInput {
    where: MasterScalarWhereInput!
    data: MasterUpdateManyMutationInput!
  }

  input MasterScalarWhereInput {
    AND: [MasterScalarWhereInput!]
    OR: [MasterScalarWhereInput!]
    NOT: [MasterScalarWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    name: StringFilter
    description: StringFilter
    image: StringFilter
    companyId: StringNullableFilter
  }

  input ScheduleUpsertWithWhereUniqueWithoutCompanyInput {
    where: ScheduleWhereUniqueInput!
    update: ScheduleUpdateWithoutCompanyInput!
    create: ScheduleCreateWithoutCompanyInput!
  }

  input ScheduleUpdateWithWhereUniqueWithoutCompanyInput {
    where: ScheduleWhereUniqueInput!
    data: ScheduleUpdateWithoutCompanyInput!
  }

  input ScheduleUpdateManyWithWhereWithoutCompanyInput {
    where: ScheduleScalarWhereInput!
    data: ScheduleUpdateManyMutationInput!
  }

  input ScheduleScalarWhereInput {
    AND: [ScheduleScalarWhereInput!]
    OR: [ScheduleScalarWhereInput!]
    NOT: [ScheduleScalarWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    week: StringNullableListFilter
    times: StringNullableListFilter
    companyId: StringNullableFilter
  }

  input CompanyCreateWithoutMastersInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    requests: RequestCreateNestedManyWithoutCompanyInput
    services: ServiceCreateNestedManyWithoutCompanyInput
    schedules: ScheduleCreateNestedManyWithoutCompanyInput
  }

  input CompanyUncheckedCreateWithoutMastersInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    requests: RequestUncheckedCreateNestedManyWithoutCompanyInput
    services: ServiceUncheckedCreateNestedManyWithoutCompanyInput
    schedules: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
  }

  input CompanyCreateOrConnectWithoutMastersInput {
    where: CompanyWhereUniqueInput!
    create: CompanyCreateWithoutMastersInput!
  }

  input RequestCreateWithoutMasterInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    company: CompanyCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
    category: CategoryCreateNestedOneWithoutRequestsInput
  }

  input RequestUncheckedCreateWithoutMasterInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    userId: String
    categoryId: String
  }

  input RequestCreateOrConnectWithoutMasterInput {
    where: RequestWhereUniqueInput!
    create: RequestCreateWithoutMasterInput!
  }

  input RequestCreateManyMasterInputEnvelope {
    data: [RequestCreateManyMasterInput!]!
    skipDuplicates: Boolean
  }

  input ScheduleCreateWithoutMastersInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    services: ServiceCreateNestedManyWithoutSchedulesInput
    company: CompanyCreateNestedOneWithoutSchedulesInput
  }

  input ScheduleUncheckedCreateWithoutMastersInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    companyId: String
    services: ServiceUncheckedCreateNestedManyWithoutSchedulesInput
  }

  input ScheduleCreateOrConnectWithoutMastersInput {
    where: ScheduleWhereUniqueInput!
    create: ScheduleCreateWithoutMastersInput!
  }

  input CompanyUpsertWithoutMastersInput {
    update: CompanyUpdateWithoutMastersInput!
    create: CompanyCreateWithoutMastersInput!
    where: CompanyWhereInput
  }

  input CompanyUpdateToOneWithWhereWithoutMastersInput {
    where: CompanyWhereInput
    data: CompanyUpdateWithoutMastersInput!
  }

  input CompanyUpdateWithoutMastersInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    requests: RequestUpdateManyWithoutCompanyNestedInput
    services: ServiceUpdateManyWithoutCompanyNestedInput
    schedules: ScheduleUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateWithoutMastersInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    requests: RequestUncheckedUpdateManyWithoutCompanyNestedInput
    services: ServiceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  input RequestUpsertWithWhereUniqueWithoutMasterInput {
    where: RequestWhereUniqueInput!
    update: RequestUpdateWithoutMasterInput!
    create: RequestCreateWithoutMasterInput!
  }

  input RequestUpdateWithWhereUniqueWithoutMasterInput {
    where: RequestWhereUniqueInput!
    data: RequestUpdateWithoutMasterInput!
  }

  input RequestUpdateManyWithWhereWithoutMasterInput {
    where: RequestScalarWhereInput!
    data: RequestUpdateManyMutationInput!
  }

  input ScheduleUpsertWithWhereUniqueWithoutMastersInput {
    where: ScheduleWhereUniqueInput!
    update: ScheduleUpdateWithoutMastersInput!
    create: ScheduleCreateWithoutMastersInput!
  }

  input ScheduleUpdateWithWhereUniqueWithoutMastersInput {
    where: ScheduleWhereUniqueInput!
    data: ScheduleUpdateWithoutMastersInput!
  }

  input ScheduleUpdateManyWithWhereWithoutMastersInput {
    where: ScheduleScalarWhereInput!
    data: ScheduleUpdateManyMutationInput!
  }

  input ScheduleCreateWithoutServicesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    masters: MasterCreateNestedManyWithoutSchedulesInput
    company: CompanyCreateNestedOneWithoutSchedulesInput
  }

  input ScheduleUncheckedCreateWithoutServicesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
    companyId: String
    masters: MasterUncheckedCreateNestedManyWithoutSchedulesInput
  }

  input ScheduleCreateOrConnectWithoutServicesInput {
    where: ScheduleWhereUniqueInput!
    create: ScheduleCreateWithoutServicesInput!
  }

  input CompanyCreateWithoutServicesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    requests: RequestCreateNestedManyWithoutCompanyInput
    masters: MasterCreateNestedManyWithoutCompanyInput
    schedules: ScheduleCreateNestedManyWithoutCompanyInput
  }

  input CompanyUncheckedCreateWithoutServicesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    requests: RequestUncheckedCreateNestedManyWithoutCompanyInput
    masters: MasterUncheckedCreateNestedManyWithoutCompanyInput
    schedules: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
  }

  input CompanyCreateOrConnectWithoutServicesInput {
    where: CompanyWhereUniqueInput!
    create: CompanyCreateWithoutServicesInput!
  }

  input CategoryCreateWithoutServicesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    subcategory: String
    requests: RequestCreateNestedManyWithoutCategoryInput
  }

  input CategoryUncheckedCreateWithoutServicesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    subcategory: String
    requests: RequestUncheckedCreateNestedManyWithoutCategoryInput
  }

  input CategoryCreateOrConnectWithoutServicesInput {
    where: CategoryWhereUniqueInput!
    create: CategoryCreateWithoutServicesInput!
  }

  input ScheduleUpsertWithWhereUniqueWithoutServicesInput {
    where: ScheduleWhereUniqueInput!
    update: ScheduleUpdateWithoutServicesInput!
    create: ScheduleCreateWithoutServicesInput!
  }

  input ScheduleUpdateWithWhereUniqueWithoutServicesInput {
    where: ScheduleWhereUniqueInput!
    data: ScheduleUpdateWithoutServicesInput!
  }

  input ScheduleUpdateManyWithWhereWithoutServicesInput {
    where: ScheduleScalarWhereInput!
    data: ScheduleUpdateManyMutationInput!
  }

  input CompanyUpsertWithoutServicesInput {
    update: CompanyUpdateWithoutServicesInput!
    create: CompanyCreateWithoutServicesInput!
    where: CompanyWhereInput
  }

  input CompanyUpdateToOneWithWhereWithoutServicesInput {
    where: CompanyWhereInput
    data: CompanyUpdateWithoutServicesInput!
  }

  input CompanyUpdateWithoutServicesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    requests: RequestUpdateManyWithoutCompanyNestedInput
    masters: MasterUpdateManyWithoutCompanyNestedInput
    schedules: ScheduleUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateWithoutServicesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    requests: RequestUncheckedUpdateManyWithoutCompanyNestedInput
    masters: MasterUncheckedUpdateManyWithoutCompanyNestedInput
    schedules: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  input CategoryUpsertWithoutServicesInput {
    update: CategoryUpdateWithoutServicesInput!
    create: CategoryCreateWithoutServicesInput!
    where: CategoryWhereInput
  }

  input CategoryUpdateToOneWithWhereWithoutServicesInput {
    where: CategoryWhereInput
    data: CategoryUpdateWithoutServicesInput!
  }

  input CategoryUpdateWithoutServicesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    subcategory: NullableStringFieldUpdateOperationsInput
    requests: RequestUpdateManyWithoutCategoryNestedInput
  }

  input CategoryUncheckedUpdateWithoutServicesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    subcategory: NullableStringFieldUpdateOperationsInput
    requests: RequestUncheckedUpdateManyWithoutCategoryNestedInput
  }

  input ServiceCreateWithoutSchedulesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    company: CompanyCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
  }

  input ServiceUncheckedCreateWithoutSchedulesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    companyId: String
    categoryId: String
  }

  input ServiceCreateOrConnectWithoutSchedulesInput {
    where: ServiceWhereUniqueInput!
    create: ServiceCreateWithoutSchedulesInput!
  }

  input MasterCreateWithoutSchedulesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    company: CompanyCreateNestedOneWithoutMastersInput
    request: RequestCreateNestedManyWithoutMasterInput
  }

  input MasterUncheckedCreateWithoutSchedulesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    companyId: String
    request: RequestUncheckedCreateNestedManyWithoutMasterInput
  }

  input MasterCreateOrConnectWithoutSchedulesInput {
    where: MasterWhereUniqueInput!
    create: MasterCreateWithoutSchedulesInput!
  }

  input CompanyCreateWithoutSchedulesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    requests: RequestCreateNestedManyWithoutCompanyInput
    services: ServiceCreateNestedManyWithoutCompanyInput
    masters: MasterCreateNestedManyWithoutCompanyInput
  }

  input CompanyUncheckedCreateWithoutSchedulesInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    requests: RequestUncheckedCreateNestedManyWithoutCompanyInput
    services: ServiceUncheckedCreateNestedManyWithoutCompanyInput
    masters: MasterUncheckedCreateNestedManyWithoutCompanyInput
  }

  input CompanyCreateOrConnectWithoutSchedulesInput {
    where: CompanyWhereUniqueInput!
    create: CompanyCreateWithoutSchedulesInput!
  }

  input ServiceUpsertWithWhereUniqueWithoutSchedulesInput {
    where: ServiceWhereUniqueInput!
    update: ServiceUpdateWithoutSchedulesInput!
    create: ServiceCreateWithoutSchedulesInput!
  }

  input ServiceUpdateWithWhereUniqueWithoutSchedulesInput {
    where: ServiceWhereUniqueInput!
    data: ServiceUpdateWithoutSchedulesInput!
  }

  input ServiceUpdateManyWithWhereWithoutSchedulesInput {
    where: ServiceScalarWhereInput!
    data: ServiceUpdateManyMutationInput!
  }

  input MasterUpsertWithWhereUniqueWithoutSchedulesInput {
    where: MasterWhereUniqueInput!
    update: MasterUpdateWithoutSchedulesInput!
    create: MasterCreateWithoutSchedulesInput!
  }

  input MasterUpdateWithWhereUniqueWithoutSchedulesInput {
    where: MasterWhereUniqueInput!
    data: MasterUpdateWithoutSchedulesInput!
  }

  input MasterUpdateManyWithWhereWithoutSchedulesInput {
    where: MasterScalarWhereInput!
    data: MasterUpdateManyMutationInput!
  }

  input CompanyUpsertWithoutSchedulesInput {
    update: CompanyUpdateWithoutSchedulesInput!
    create: CompanyCreateWithoutSchedulesInput!
    where: CompanyWhereInput
  }

  input CompanyUpdateToOneWithWhereWithoutSchedulesInput {
    where: CompanyWhereInput
    data: CompanyUpdateWithoutSchedulesInput!
  }

  input CompanyUpdateWithoutSchedulesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    requests: RequestUpdateManyWithoutCompanyNestedInput
    services: ServiceUpdateManyWithoutCompanyNestedInput
    masters: MasterUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateWithoutSchedulesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    requests: RequestUncheckedUpdateManyWithoutCompanyNestedInput
    services: ServiceUncheckedUpdateManyWithoutCompanyNestedInput
    masters: MasterUncheckedUpdateManyWithoutCompanyNestedInput
  }

  input CompanyCreateWithoutRequestsInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    services: ServiceCreateNestedManyWithoutCompanyInput
    masters: MasterCreateNestedManyWithoutCompanyInput
    schedules: ScheduleCreateNestedManyWithoutCompanyInput
  }

  input CompanyUncheckedCreateWithoutRequestsInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String!
    phone: String
    whatsapp: String
    password: String!
    repassword: String
    name: String!
    description: String!
    city: String
    location: String
    address: String
    avatar: String
    images: [String!]
    services: ServiceUncheckedCreateNestedManyWithoutCompanyInput
    masters: MasterUncheckedCreateNestedManyWithoutCompanyInput
    schedules: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
  }

  input CompanyCreateOrConnectWithoutRequestsInput {
    where: CompanyWhereUniqueInput!
    create: CompanyCreateWithoutRequestsInput!
  }

  input UserCreateWithoutRequestsInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    phone: String!
    code: String
    name: String
    pushId: String
  }

  input UserUncheckedCreateWithoutRequestsInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    phone: String!
    code: String
    name: String
    pushId: String
  }

  input UserCreateOrConnectWithoutRequestsInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutRequestsInput!
  }

  input MasterCreateWithoutRequestInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    company: CompanyCreateNestedOneWithoutMastersInput
    schedules: ScheduleCreateNestedManyWithoutMastersInput
  }

  input MasterUncheckedCreateWithoutRequestInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
    companyId: String
    schedules: ScheduleUncheckedCreateNestedManyWithoutMastersInput
  }

  input MasterCreateOrConnectWithoutRequestInput {
    where: MasterWhereUniqueInput!
    create: MasterCreateWithoutRequestInput!
  }

  input CategoryCreateWithoutRequestsInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    subcategory: String
    services: ServiceCreateNestedManyWithoutCategoryInput
  }

  input CategoryUncheckedCreateWithoutRequestsInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    subcategory: String
    services: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  input CategoryCreateOrConnectWithoutRequestsInput {
    where: CategoryWhereUniqueInput!
    create: CategoryCreateWithoutRequestsInput!
  }

  input CompanyUpsertWithoutRequestsInput {
    update: CompanyUpdateWithoutRequestsInput!
    create: CompanyCreateWithoutRequestsInput!
    where: CompanyWhereInput
  }

  input CompanyUpdateToOneWithWhereWithoutRequestsInput {
    where: CompanyWhereInput
    data: CompanyUpdateWithoutRequestsInput!
  }

  input CompanyUpdateWithoutRequestsInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    services: ServiceUpdateManyWithoutCompanyNestedInput
    masters: MasterUpdateManyWithoutCompanyNestedInput
    schedules: ScheduleUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateWithoutRequestsInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    phone: NullableStringFieldUpdateOperationsInput
    whatsapp: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    repassword: NullableStringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    city: StringFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    address: NullableStringFieldUpdateOperationsInput
    avatar: NullableStringFieldUpdateOperationsInput
    images: [String!]
    services: ServiceUncheckedUpdateManyWithoutCompanyNestedInput
    masters: MasterUncheckedUpdateManyWithoutCompanyNestedInput
    schedules: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  input UserUpsertWithoutRequestsInput {
    update: UserUpdateWithoutRequestsInput!
    create: UserCreateWithoutRequestsInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutRequestsInput {
    where: UserWhereInput
    data: UserUpdateWithoutRequestsInput!
  }

  input UserUpdateWithoutRequestsInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    phone: StringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    pushId: NullableStringFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateWithoutRequestsInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    phone: StringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    pushId: NullableStringFieldUpdateOperationsInput
  }

  input MasterUpsertWithoutRequestInput {
    update: MasterUpdateWithoutRequestInput!
    create: MasterCreateWithoutRequestInput!
    where: MasterWhereInput
  }

  input MasterUpdateToOneWithWhereWithoutRequestInput {
    where: MasterWhereInput
    data: MasterUpdateWithoutRequestInput!
  }

  input MasterUpdateWithoutRequestInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneWithoutMastersNestedInput
    schedules: ScheduleUpdateManyWithoutMastersNestedInput
  }

  input MasterUncheckedUpdateWithoutRequestInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    schedules: ScheduleUncheckedUpdateManyWithoutMastersNestedInput
  }

  input CategoryUpsertWithoutRequestsInput {
    update: CategoryUpdateWithoutRequestsInput!
    create: CategoryCreateWithoutRequestsInput!
    where: CategoryWhereInput
  }

  input CategoryUpdateToOneWithWhereWithoutRequestsInput {
    where: CategoryWhereInput
    data: CategoryUpdateWithoutRequestsInput!
  }

  input CategoryUpdateWithoutRequestsInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    subcategory: NullableStringFieldUpdateOperationsInput
    services: ServiceUpdateManyWithoutCategoryNestedInput
  }

  input CategoryUncheckedUpdateWithoutRequestsInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    subcategory: NullableStringFieldUpdateOperationsInput
    services: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  input ServiceCreateWithoutCategoryInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    schedules: ScheduleCreateNestedManyWithoutServicesInput
    company: CompanyCreateNestedOneWithoutServicesInput
  }

  input ServiceUncheckedCreateWithoutCategoryInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    companyId: String
    schedules: ScheduleUncheckedCreateNestedManyWithoutServicesInput
  }

  input ServiceCreateOrConnectWithoutCategoryInput {
    where: ServiceWhereUniqueInput!
    create: ServiceCreateWithoutCategoryInput!
  }

  input ServiceCreateManyCategoryInputEnvelope {
    data: [ServiceCreateManyCategoryInput!]!
    skipDuplicates: Boolean
  }

  input RequestCreateWithoutCategoryInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    company: CompanyCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
    master: MasterCreateNestedOneWithoutRequestInput
  }

  input RequestUncheckedCreateWithoutCategoryInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    userId: String
    masterId: String
  }

  input RequestCreateOrConnectWithoutCategoryInput {
    where: RequestWhereUniqueInput!
    create: RequestCreateWithoutCategoryInput!
  }

  input RequestCreateManyCategoryInputEnvelope {
    data: [RequestCreateManyCategoryInput!]!
    skipDuplicates: Boolean
  }

  input ServiceUpsertWithWhereUniqueWithoutCategoryInput {
    where: ServiceWhereUniqueInput!
    update: ServiceUpdateWithoutCategoryInput!
    create: ServiceCreateWithoutCategoryInput!
  }

  input ServiceUpdateWithWhereUniqueWithoutCategoryInput {
    where: ServiceWhereUniqueInput!
    data: ServiceUpdateWithoutCategoryInput!
  }

  input ServiceUpdateManyWithWhereWithoutCategoryInput {
    where: ServiceScalarWhereInput!
    data: ServiceUpdateManyMutationInput!
  }

  input RequestUpsertWithWhereUniqueWithoutCategoryInput {
    where: RequestWhereUniqueInput!
    update: RequestUpdateWithoutCategoryInput!
    create: RequestCreateWithoutCategoryInput!
  }

  input RequestUpdateWithWhereUniqueWithoutCategoryInput {
    where: RequestWhereUniqueInput!
    data: RequestUpdateWithoutCategoryInput!
  }

  input RequestUpdateManyWithWhereWithoutCategoryInput {
    where: RequestScalarWhereInput!
    data: RequestUpdateManyMutationInput!
  }

  input RequestCreateManyUserInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    masterId: String
    categoryId: String
  }

  input RequestUpdateWithoutUserInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneWithoutRequestsNestedInput
    master: MasterUpdateOneWithoutRequestNestedInput
    category: CategoryUpdateOneWithoutRequestsNestedInput
  }

  input RequestUncheckedUpdateWithoutUserInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    masterId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input RequestUncheckedUpdateManyWithoutUserInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    masterId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input RequestCreateManyCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    userId: String
    masterId: String
    categoryId: String
  }

  input ServiceCreateManyCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    categoryId: String
  }

  input MasterCreateManyCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    description: String!
    image: String!
  }

  input ScheduleCreateManyCompanyInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    week: [String!]
    times: [String!]
  }

  input RequestUpdateWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    user: UserUpdateOneWithoutRequestsNestedInput
    master: MasterUpdateOneWithoutRequestNestedInput
    category: CategoryUpdateOneWithoutRequestsNestedInput
  }

  input RequestUncheckedUpdateWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    userId: NullableStringFieldUpdateOperationsInput
    masterId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input RequestUncheckedUpdateManyWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    userId: NullableStringFieldUpdateOperationsInput
    masterId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input ServiceUpdateWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    schedules: ScheduleUpdateManyWithoutServicesNestedInput
    category: CategoryUpdateOneWithoutServicesNestedInput
  }

  input ServiceUncheckedUpdateWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
    schedules: ScheduleUncheckedUpdateManyWithoutServicesNestedInput
  }

  input ServiceUncheckedUpdateManyWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input MasterUpdateWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    request: RequestUpdateManyWithoutMasterNestedInput
    schedules: ScheduleUpdateManyWithoutMastersNestedInput
  }

  input MasterUncheckedUpdateWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    request: RequestUncheckedUpdateManyWithoutMasterNestedInput
    schedules: ScheduleUncheckedUpdateManyWithoutMastersNestedInput
  }

  input MasterUncheckedUpdateManyWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
  }

  input ScheduleUpdateWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    services: ServiceUpdateManyWithoutSchedulesNestedInput
    masters: MasterUpdateManyWithoutSchedulesNestedInput
  }

  input ScheduleUncheckedUpdateWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    services: ServiceUncheckedUpdateManyWithoutSchedulesNestedInput
    masters: MasterUncheckedUpdateManyWithoutSchedulesNestedInput
  }

  input ScheduleUncheckedUpdateManyWithoutCompanyInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
  }

  input RequestCreateManyMasterInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    userId: String
    categoryId: String
  }

  input RequestUpdateWithoutMasterInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneWithoutRequestsNestedInput
    user: UserUpdateOneWithoutRequestsNestedInput
    category: CategoryUpdateOneWithoutRequestsNestedInput
  }

  input RequestUncheckedUpdateWithoutMasterInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    userId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input RequestUncheckedUpdateManyWithoutMasterInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    userId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input ScheduleUpdateWithoutMastersInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    services: ServiceUpdateManyWithoutSchedulesNestedInput
    company: CompanyUpdateOneWithoutSchedulesNestedInput
  }

  input ScheduleUncheckedUpdateWithoutMastersInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    companyId: NullableStringFieldUpdateOperationsInput
    services: ServiceUncheckedUpdateManyWithoutSchedulesNestedInput
  }

  input ScheduleUncheckedUpdateManyWithoutMastersInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    companyId: NullableStringFieldUpdateOperationsInput
  }

  input ScheduleUpdateWithoutServicesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    masters: MasterUpdateManyWithoutSchedulesNestedInput
    company: CompanyUpdateOneWithoutSchedulesNestedInput
  }

  input ScheduleUncheckedUpdateWithoutServicesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    companyId: NullableStringFieldUpdateOperationsInput
    masters: MasterUncheckedUpdateManyWithoutSchedulesNestedInput
  }

  input ScheduleUncheckedUpdateManyWithoutServicesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    week: [String!]
    times: [String!]
    companyId: NullableStringFieldUpdateOperationsInput
  }

  input ServiceUpdateWithoutSchedulesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    company: CompanyUpdateOneWithoutServicesNestedInput
    category: CategoryUpdateOneWithoutServicesNestedInput
  }

  input ServiceUncheckedUpdateWithoutSchedulesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input ServiceUncheckedUpdateManyWithoutSchedulesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    categoryId: NullableStringFieldUpdateOperationsInput
  }

  input MasterUpdateWithoutSchedulesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneWithoutMastersNestedInput
    request: RequestUpdateManyWithoutMasterNestedInput
  }

  input MasterUncheckedUpdateWithoutSchedulesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    request: RequestUncheckedUpdateManyWithoutMasterNestedInput
  }

  input MasterUncheckedUpdateManyWithoutSchedulesInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    description: StringFieldUpdateOperationsInput
    image: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
  }

  input ServiceCreateManyCategoryInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int!
    companyId: String
  }

  input RequestCreateManyCategoryInput {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String!
    times: [String!]
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    userId: String
    masterId: String
  }

  input ServiceUpdateWithoutCategoryInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    schedules: ScheduleUpdateManyWithoutServicesNestedInput
    company: CompanyUpdateOneWithoutServicesNestedInput
  }

  input ServiceUncheckedUpdateWithoutCategoryInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    schedules: ScheduleUncheckedUpdateManyWithoutServicesNestedInput
  }

  input ServiceUncheckedUpdateManyWithoutCategoryInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    price: IntFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
  }

  input RequestUpdateWithoutCategoryInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneWithoutRequestsNestedInput
    user: UserUpdateOneWithoutRequestsNestedInput
    master: MasterUpdateOneWithoutRequestNestedInput
  }

  input RequestUncheckedUpdateWithoutCategoryInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    userId: NullableStringFieldUpdateOperationsInput
    masterId: NullableStringFieldUpdateOperationsInput
  }

  input RequestUncheckedUpdateManyWithoutCategoryInput {
    id: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    date: StringFieldUpdateOperationsInput
    times: [String!]
    price: NullableIntFieldUpdateOperationsInput
    status: StringFieldUpdateOperationsInput
    rating: IntFieldUpdateOperationsInput
    review: NullableStringFieldUpdateOperationsInput
    code: StringFieldUpdateOperationsInput
    companyId: NullableStringFieldUpdateOperationsInput
    userId: NullableStringFieldUpdateOperationsInput
    masterId: NullableStringFieldUpdateOperationsInput
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateAdmin {
    _count: AdminCountAggregateOutputType
    _min: AdminMinAggregateOutputType
    _max: AdminMaxAggregateOutputType
  }

  type AggregateCompany {
    _count: CompanyCountAggregateOutputType
    _min: CompanyMinAggregateOutputType
    _max: CompanyMaxAggregateOutputType
  }

  type AggregateMaster {
    _count: MasterCountAggregateOutputType
    _min: MasterMinAggregateOutputType
    _max: MasterMaxAggregateOutputType
  }

  type AggregateService {
    _count: ServiceCountAggregateOutputType
    _avg: ServiceAvgAggregateOutputType
    _sum: ServiceSumAggregateOutputType
    _min: ServiceMinAggregateOutputType
    _max: ServiceMaxAggregateOutputType
  }

  type AggregateSchedule {
    _count: ScheduleCountAggregateOutputType
    _min: ScheduleMinAggregateOutputType
    _max: ScheduleMaxAggregateOutputType
  }

  type AggregateRequest {
    _count: RequestCountAggregateOutputType
    _avg: RequestAvgAggregateOutputType
    _sum: RequestSumAggregateOutputType
    _min: RequestMinAggregateOutputType
    _max: RequestMaxAggregateOutputType
  }

  type AggregateCategory {
    _count: CategoryCountAggregateOutputType
    _min: CategoryMinAggregateOutputType
    _max: CategoryMaxAggregateOutputType
  }

  type AggregatePromotion {
    _count: PromotionCountAggregateOutputType
    _min: PromotionMinAggregateOutputType
    _max: PromotionMaxAggregateOutputType
  }

  type UserCountOutputType {
    requests: Int!
  }

  type UserCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    phone: Int!
    code: Int!
    name: Int!
    pushId: Int!
    _all: Int!
  }

  type UserMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    phone: String
    code: String
    name: String
    pushId: String
  }

  type UserMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    phone: String
    code: String
    name: String
    pushId: String
  }

  type AdminCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    login: Int!
    password: Int!
    _all: Int!
  }

  type AdminMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    login: String
    password: String
  }

  type AdminMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    login: String
    password: String
  }

  type CompanyCountOutputType {
    requests: Int!
    services: Int!
    masters: Int!
    schedules: Int!
  }

  type CompanyCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    email: Int!
    phone: Int!
    whatsapp: Int!
    password: Int!
    repassword: Int!
    name: Int!
    description: Int!
    city: Int!
    location: Int!
    address: Int!
    avatar: Int!
    images: Int!
    _all: Int!
  }

  type CompanyMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String
    phone: String
    whatsapp: String
    password: String
    repassword: String
    name: String
    description: String
    city: String
    location: String
    address: String
    avatar: String
  }

  type CompanyMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    email: String
    phone: String
    whatsapp: String
    password: String
    repassword: String
    name: String
    description: String
    city: String
    location: String
    address: String
    avatar: String
  }

  type MasterCountOutputType {
    request: Int!
    schedules: Int!
  }

  type MasterCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    name: Int!
    description: Int!
    image: Int!
    companyId: Int!
    _all: Int!
  }

  type MasterMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    description: String
    image: String
    companyId: String
  }

  type MasterMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    description: String
    image: String
    companyId: String
  }

  type ServiceCountOutputType {
    schedules: Int!
  }

  type ServiceCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    name: Int!
    price: Int!
    companyId: Int!
    categoryId: Int!
    _all: Int!
  }

  type ServiceAvgAggregateOutputType {
    price: Float
  }

  type ServiceSumAggregateOutputType {
    price: Int
  }

  type ServiceMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int
    companyId: String
    categoryId: String
  }

  type ServiceMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    price: Int
    companyId: String
    categoryId: String
  }

  type ScheduleCountOutputType {
    services: Int!
    masters: Int!
  }

  type ScheduleCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    week: Int!
    times: Int!
    companyId: Int!
    _all: Int!
  }

  type ScheduleMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    companyId: String
  }

  type ScheduleMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    companyId: String
  }

  type RequestCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    date: Int!
    times: Int!
    price: Int!
    status: Int!
    rating: Int!
    review: Int!
    code: Int!
    companyId: Int!
    userId: Int!
    masterId: Int!
    categoryId: Int!
    _all: Int!
  }

  type RequestAvgAggregateOutputType {
    price: Float
    rating: Float
  }

  type RequestSumAggregateOutputType {
    price: Int
    rating: Int
  }

  type RequestMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    userId: String
    masterId: String
    categoryId: String
  }

  type RequestMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    date: String
    price: Int
    status: String
    rating: Int
    review: String
    code: String
    companyId: String
    userId: String
    masterId: String
    categoryId: String
  }

  type CategoryCountOutputType {
    services: Int!
    requests: Int!
  }

  type CategoryCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    name: Int!
    subcategory: Int!
    _all: Int!
  }

  type CategoryMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    subcategory: String
  }

  type CategoryMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    subcategory: String
  }

  type PromotionCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    updatedAt: Int!
    name: Int!
    text: Int!
    image: Int!
    _all: Int!
  }

  type PromotionMinAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    text: String
    image: String
  }

  type PromotionMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    name: String
    text: String
    image: String
  }
`

module.exports = {
  InputTypes,
}
