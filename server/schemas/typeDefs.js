const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    savedResources: [ResourcesCard]!
    resourceCount: String
  }

  type ResourcesCard {
    id: ID
    title: String
    description: String
    url: String
    language: [String]!
    like: [ID]
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    user: User
    resourcesCards: [ResourcesCard]
    getSingleCardbyId(_id: ID!): ResourcesCard
  }

  input ResourceData {
    _id: ID
    title: String
    description: String
    url: String
    language: [String]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addResourcesCard(resource: ResourceData!): Boolean
    updateResourcesCard(resource: ResourceData!): Boolean
    deleteResourcesCard(cardId: ID!): Boolean
    canLikeResourcesCard(cardId: ID!): Boolean
    likeResourcesCard(cardId: ID!): Boolean
  }
`;
module.exports = typeDefs;
