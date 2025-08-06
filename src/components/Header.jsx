import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import hamburgerOpen from '../assets/svg/hamburger-open.svg';
import hamburgerClose from '../assets/svg/hamburger-close.svg';

const Header = () => {
  const { user, logoutUser } = useAuth();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <section className='flex items-center justify-between top-0 sticky bg-white px-5 max-w-[1280px] mx-auto z-50'>
      <div>
        <NavLink to="/">
          <h1 className="text-3xl font-bold text-blue-600">Logo</h1>
        </NavLink>
      </div>

      <nav className="py-5">
        {!toggle && (
          <img
            src={hamburgerOpen}
            alt="Open menu"
            className="w-9 h-9 cursor-pointer md:hidden"
            onClick={handleClick}
          />
        )}

        <ul
          className={`
    ${toggle ? "flex" : "hidden"} 
    flex flex-col absolute right-0  top-0 bg-white shadow-xl 
    p-6 gap-5 w-[100%] 
    z-50 text-black
    transition-all duration-300 ease-in-out
    md:opacity-100 md:translate-y-0 md:pointer-events-auto
    md:flex md:flex-row md:static md:shadow-none md:p-0 md:gap-10 md:w-auto md:max-w-none md:bg-transparent md:rounded-none
  `}
        >
          <li className="flex  justify-end md:hidden">
            <img
              src={hamburgerClose}
              alt="Close menu"
              className="w-9 h-9  bg-blue-500 rounded cursor-pointer"
              onClick={handleClick}
            />
          </li>

          {user ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                  onClick={() => setToggle(false)}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                  onClick={() => setToggle(false)}
                >
                  Profile
                </NavLink>
              </li>
            </>
          ) : null}

          {user ? (
            <li>
              <button
                className=" md:text-black cursor-pointer font-semibold"
                onClick={() => {
                  logoutUser();
                  setToggle(false);
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                  onClick={() => setToggle(false)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                  onClick={() => setToggle(false)}
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </section>
  )
}

export default Header
