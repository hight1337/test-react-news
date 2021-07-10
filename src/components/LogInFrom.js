import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import Login from '../store/Login'
import { adminCredentials } from '../constants/credentialsConfig'

const LogInFrom = observer(() => {
  const userNameInputRef = useRef()
  const passwordInputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      userNameInputRef.current.value !== adminCredentials.userName ||
      passwordInputRef.current.value !== adminCredentials.password
    ) {
      Login.showLoginError()
    }
    if (
      userNameInputRef.current.value === '' ||
      passwordInputRef.current.value === ''
    ) {
      Login.showLoginError()
    }

    if (!Login.loginError) {
      Login.logIn()
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      Login.hideLoginError()
    }, 4000)
  }, [Login.loginError])

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
            ref={userNameInputRef}
          />
          <label htmlFor='password'>Password:</label>
          <input className='grocery' type='password' ref={passwordInputRef} />
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
