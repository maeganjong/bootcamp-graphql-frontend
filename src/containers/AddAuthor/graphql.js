import gql from 'graphql-tag'

const ADD_AUTHOR = gql`
    mutation CreateAuthor($input: CreateAuthorInput!){
        createAuthor(input: $input) {
            id
            firstName
            lastName
            age
        }
    }
`

export default ADD_AUTHOR
