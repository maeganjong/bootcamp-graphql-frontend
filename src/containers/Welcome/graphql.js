import gql from 'graphql-tag'

const WELCOME = gql`
    query Welcome {
        welcome
    }
`
export default WELCOME
