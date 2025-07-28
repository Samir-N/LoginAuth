import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
  const { user, logoutUser } = useAuth();
  return (
    <section className='  flex items-center justify-between'>
      <div><NavLink to='/'><h1>Logo</h1></NavLink></div>
      <nav>
        <ul>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/profile'><li>Profile</li></NavLink>

          {
            user ?
              <button className='loginBtn' onClick={logoutUser}>Logout</button>
              :
              <>
                <NavLink to='/login'><li>Login</li></NavLink>
                <NavLink to='/register'><li>Register</li></NavLink>
              </>
          }
        </ul>
      </nav>
    </section>
  )
}

export default Header
