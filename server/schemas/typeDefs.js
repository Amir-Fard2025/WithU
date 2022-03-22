const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    createdCards: [String]
    likedCards: [String]
    resourceCount: String
  }

  type ResourcesCard {
    id: ID
    title: String
    description: String
    url: String
    language: [String]!
    like: [ID]
    tag_id: [String]
    status: String
  }

  type Auth {
    token: String
    user: User
  }

  type Tag {
    id: ID
    tagName: String
    resourceCards: [String]
  }

  type Query {
    user: User
    resourcesCards: [ResourcesCard]
    getPublishedCardsByTagId(tagId: ID!): [ResourcesCard]
    getPublishedCardsByTagName(tagName: String!): [ResourcesCard]
    getUnpublishedCards: [ResourcesCard]
    getSingleCardbyId(_id: ID!): ResourcesCard
    getAllUserCards: [ResourcesCard]
    getAllTags: [Tag],
    getAllCardsByStatus(status: String!): [ResourcesCard]
  }

  input ResourceData {
    _id: ID
    title: String
    description: String
    url: String
    language: [String]
    tag_id: [String]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addResourcesCard(resource: ResourceData!): Boolean
    updateResourcesCard(resource: ResourceData!): Boolean
    deleteResourcesCard(cardId: ID!): Boolean
    toggleLikeResourcesCard(cardId: ID!): Boolean
  }
`;
module.exports = typeDefs;
