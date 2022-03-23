const { gql } = require("@apollo/client");

const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id

        email
        password
      }
    }
  }
`;
const ADDUSER = gql`
  mutation ($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id

        email
        password
      }
    }
  }
`;

// How to handle arrays for tags and languages?
const ADDRESOURCE = gql`
  mutation (
    $title: String!
    $description: String!
    $url: String!
    $tag_id: [String!]
    $language: [String!]
  ) {
    addResourcesCard(
      title: $title
      description: $description
      url: $url
      tag_id: $tag_id
      language: $language
    ) {
      resource {
        _id

        title
        description
        url
        tag_id
        language
      }
    }
  }
`;
export { LOGIN, ADDUSER, ADDRESOURCE };
