import React from 'react'
import LogInFrom from '../components/LogInFrom'
import Login from '../store/Login'
import { Redirect } from 'react-router'

const LogIn = () => {
  return <div>{Login.login ? <Redirect to='/profile' /> : <LogInFrom />}</div>
}

export default LogIn
