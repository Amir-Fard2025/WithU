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

const ADDRESOURCE = gql`
  mutation (
    $resource: ResourceData!
  ) {
    addResourcesCard(
      resource: $resource
    ) 
  }
`;

const TOGGLE_LIKE = gql`
mutation Mutation($cardId: ID!) {
  toggleLikeResourcesCard(cardId: $cardId)
}
`;
export { LOGIN, ADDUSER, ADDRESOURCE, TOGGLE_LIKE };
