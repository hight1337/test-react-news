import React from 'react'
import { Link, Switch } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar