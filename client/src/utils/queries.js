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

export const GET_PUBLISHED_CARDS_BY_TAG = gql`

`

