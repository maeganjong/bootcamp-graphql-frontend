import React, { useReducer } from 'react'
import { useMutation } from '@apollo/react-hooks'
import ADD_AUTHOR from './graphql'
import { GET_AUTHORS } from '../Home/graphql'

const AddAuthor = () => {
  const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

  const [form, setForm] = useReducer(formReducer,
    {
      firstName: '',
      lastName: '',
    })
  const [addAuthor, { data, loading, error }] = useMutation(ADD_AUTHOR, {
    variables: {
      input:
        form,
    },
    onCompleted: () => console.log('yay'),

    update: (client, { data: { createAuthor } }) => {
      try {
        const data = client.readQuery({ query: GET_AUTHORS })

        data.author = [...data.author, createAuthor]

        client.writeQuery({ query: GET_AUTHORS, data })
      } catch (err) {
        // nothing
      }
    },
  })

  console.log(form)
  return (
    <div>
      <input placeholder="firstName" name="firstName" onChange={e => setForm({ [e.target.name]: e.target.value })} />
      <input placeholder="lastName" name="lastName" onChange={e => setForm({ [e.target.name]: e.target.value })} />
      <button type="button" onClick={addAuthor}>Add Author</button>
    </div>
  )
}

export default AddAuthor
