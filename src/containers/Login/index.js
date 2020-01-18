import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import LOGIN from './graphql'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onCompleted: ({ login: { token } }) => localStorage.setItem('token', token),
  })


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      margin: '20px 0',
      width: 300,
    }}
    >
      <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={login}>Login</button>
    </div>
  )
}

export default Login
