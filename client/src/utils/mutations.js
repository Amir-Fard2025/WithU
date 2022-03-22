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
    adduser(email: $email, password: $password) {
      token
      user {
        _id

        email
        password
      }
    }
  }
`;
export { LOGIN, ADDUSER };
