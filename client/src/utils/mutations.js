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
    $resource: ResourceData!
  ) {
    addResourcesCard(
      resource: $resource
    ) 
  }
`;
export { LOGIN, ADDUSER, ADDRESOURCE };
