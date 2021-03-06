import React from 'react'
import Login from '../store/Login'

const Profile = () => {
  return (
    <>
      <section className='container'>
        <div className='profile-ifno'>
          <h1>Profile</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolore deleniti temporibus expedita distinctio nesciunt debitis
            praesentium illum voluptate impedit placeat sunt adipisci eveniet
            aspernatur, reprehenderit reiciendis eligendi magnam! Ex at facilis
            eaque hic earum libero neque tempora saepe excepturi.
          </p>
        </div>
        <button className='btn-login' onClick={() => Login.logOut()}>
          Log Out
        </button>
      </section>
    </>
  )
}

export default Profile
