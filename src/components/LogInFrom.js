import React, { useRef, useState } from 'react'

const LogInFrom = () => {
  const userNameRef = useRef()
  const passwordRef = useRef()
  const [loginErr, setLoginErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      userNameRef.current.value !== 'Admin' ||
      passwordRef.current.value !== '12345'
    ) {
      setLoginErr(true)
    }
    if (userNameRef.current.value === '' || passwordRef.current.value === '') {
      setLoginErr(true)
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
            onClick={() => setLoginErr(false)}
          />
          <label htmlFor='password'>Password:</label>
          <input
            className='grocery'
            type='password'
            ref={passwordRef}
            onClick={() => setLoginErr(false)}
          />
        </div>
        <button className='btn-login'>Login</button>
      </form>
      {loginErr && <h5 className='login-error'>Wrong User name or Password</h5>}
    </section>
  )
}

export default LogInFrom
