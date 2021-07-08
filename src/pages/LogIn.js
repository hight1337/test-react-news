import React from 'react'
import LogInFrom from '../components/LogInFrom'
import Login from '../store/Login'
import { Redirect } from 'react-router'
import { observer } from 'mobx-react-lite'

const LogIn = observer(() => {
  React.useEffect(() => {
    localStorage.setItem('login', JSON.stringify(Login.login))
  }, [Login.login])

  return <div>{Login.login ? <Redirect to='/profile' /> : <LogInFrom />}</div>
})

export default LogIn
