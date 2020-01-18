import gql from 'graphql-tag'

export const GET_BOOKS = gql`
    query herg {
        books {
            id
            title
        }
}
`
export const GET_AUTHORS = gql`
    query herg {
        author {
            id
            firstName
            lastName
        }
}
`
export const GET_ONE_AUTHOR = gql`
    query getAuthor($input: String!){
        searchAuthor(name: $input){
        id
        firstName
        lastName
  }
}

`

