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
query GetPublishedCardsByTagName($tagName: String!) {
  getPublishedCardsByTagName(tagName: $tagName) {
    id
    title
    description
    url
    like
    language
    tag_id
    status
  }
}
`
export const GET_PUBLISHED_CARDS_BY_ALL_TAGS = gql`
query GetPublishedCardsByAllTagNames($tagNamesArray: [String!]!) {
  getPublishedCardsByAllTagNames(tagNamesArray: $tagNamesArray) {
    id
    title
    description
    url
    language
    tag_id
    like
    screenshot
    status
  }
}
`

export const GET_LIKED_CARDS_BY_USER_ID = gql`
query GetAllUserLikedCards {
  getAllUserLikedCards {
    id
    title
    description
    url
    language
    tag_id
    like
    screenshot
    status
  }
}`

export const GET_CREATED_CARDS_BY_USER_ID = gql`
query GetAllUserCreatedCards {
  getAllUserCreatedCards {
    id
    title
    description
    url
    language
    like
    tag_id
    screenshot
    status
  }
}`