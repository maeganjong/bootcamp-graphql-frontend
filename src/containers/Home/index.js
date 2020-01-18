import React, { useState, useReducer } from 'react'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { GET_BOOKS, GET_AUTHORS, GET_ONE_AUTHOR } from './graphql'
import AddAuthor from '../AddAuthor'
import Login from '../Login'
import Welcome from '../Welcome'

const Home = () => {
  const [author, setAuthor] = useState()
  const [getOneAuthor, {
    loading: oneAuthorLoading, data: oneAuthorData, error: oneAuthorError, called,
  }] = useLazyQuery(
    GET_ONE_AUTHOR,
    {
      variables: { input: author },
    },
  )
  const { loading: bookLoading, error: bookError, data: bookData } = useQuery(GET_BOOKS)
  // {
  //   variables: {},
  //   skip: Boolean,
  //   partialRefetch: true,
  // }
  const { loading: authorLoading, error: authorError, data: authorData } = useQuery(GET_AUTHORS)

  if (bookLoading || authorLoading || oneAuthorLoading) return 'Loading!'
  if (bookError || authorError || oneAuthorError) return 'Error!'

  const Books = () => bookData.books.map(({ id, title }) => (
    <p key={id}>
      {title}
    </p>
  ))

  const Authors = () => authorData.author.map(({ id, firstName }) => (
    <p key={id}>
      {firstName}
    </p>
  ))


  return (
    <div>
      <Login />
      <Welcome />
      <input placeholder="search author" value={author} onChange={e => setAuthor(e.target.value)} />
      <button type="button" onClick={getOneAuthor}>Click Me!</button>
      {

          called && oneAuthorData.searchAuthor.map(({ id, firstName, lastName }) => (
            <p key={id}>
              {`${firstName} ${lastName}`}
            </p>
          ))
      }

      <AddAuthor />
      {authorData.author.map(
        ({ id, firstName, lastName }) => <p key={id}>{`${firstName} ${lastName}`}</p>,
      )}

    </div>

  )
}


export default Home
