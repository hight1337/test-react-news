import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import Login from '../store/Login'
import { adminCredentials } from '../constants/credentialsConfig'

const LogInFrom = observer(() => {
  const userNameRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      userNameRef.current.value !== adminCredentials.userName ||
      passwordRef.current.value !== adminCredentials.password
    ) {
      Login.setErrorTrue()
    }
    if (userNameRef.current.value === '' || passwordRef.current.value === '') {
      Login.setErrorTrue()
    }

    if (!Login.loginError) {
      Login.setLoginTrue()
    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3 className='login-form__title'>Login</h3>
        <div className='form-control'>
          <label htmlFor='username'>UserName:</label>
          <input
            className='grocery'
            type='text'
            id='username'
            ref={userNameRef}
            onClick={() => Login.setErrorFalse()}
          />
          <label htmlFor='password'>Password:</label>
          <input
            className='grocery'
            type='password'
            ref={passwordRef}
            onClick={() => Login.setErrorFalse()}
          />
        </div>
        <button className='btn-login'>LogIn</button>
      </form>
      {Login.loginError && (
        <h5 className='login-error'>Wrong User name or Password</h5>
      )}
    </section>
  )
})

export default LogInFrom
