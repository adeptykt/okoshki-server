// src/graphql/Chat/typeDefs.js
const { gql } = require('graphql-tag');

const Chat = gql`
  type Chat {
    id: ID!
    createdAt: DateTime!
    members: [User!]!
    messages: [Message!]!
    deletedAt: DateTime
  }

  type Message {
    id: ID!
    content: String!
    sender: User!
    chat: Chat!
    deliveryStatus: DeliveryStatus!
    createdAt: DateTime!
  }

  enum DeliveryStatus {
    PENDING
    DELIVERED
    FAILED
  }

  input CreateChatInput {
    memberIds: [ID!]!
  }

  input SendMessageInput {
    chatId: ID!
    content: String!
  }

  extend type Query {
    myChats: [Chat!]!
    chatMessages(chatId: ID!): [Message!]!
  }

  extend type Mutation {
    createChat(input: CreateChatInput!): Chat!
    sendMessage(input: SendMessageInput!): Message!
  }

  extend type Subscription {
    newMessage(chatId: ID!): Message!
  }
`;

module.exports = Chat;
