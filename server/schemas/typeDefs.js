const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    savedResources: [ResourcesCard]
    resourceCount: String
  }

  type ResourcesCard {
    resourceId: ID
    title: String
    description: String
    url: String
    language: [String]
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    me: User
  }
  input ResourceData {
    resourceId: ID
    title: String
    description: String
    url: String
    language: [String]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    adduser(email: String!, password: String!): Auth
    saveResourcesCard(resource: ResourceData!): User
  }
`;
module.exports = typeDefs;
