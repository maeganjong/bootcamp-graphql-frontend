import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import WELCOME from './graphql'

const Welcome = () => {
  const [getWelcome, {
    loading, error, data, called,
  }] = useLazyQuery(WELCOME,
    {
      onError: () => {},
    })

  if (loading) return 'loading...'
  if (error) return <h1>You done goofed!</h1>
  if (!called) return <button style={{ margin: 'auto' }} type="button" onClick={getWelcome}>GetWlecome!</button>

  return (
    <h1>{data.welcome}</h1>
  )
}

export default Welcome
