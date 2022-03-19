import { gql } from '@apollo/client';

export const GET_ALL_CARDS = gql`
    query getAllCards {
        resourcesCards {
        id
        title
        description
        url
  }
}
`;