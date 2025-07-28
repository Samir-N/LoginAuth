import React, { useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const{registerUser,error,setError,user} = useAuth();
  const registerForm = useRef(null);
  const navigate = useNavigate();
  setError("");




  const handleSubmit = (e) => {

  e.preventDefault();

  const username = registerForm.current.username.value;
  const email = registerForm.current.email.value;
  const password = registerForm.current.password.value;
  const conformPassword = registerForm.current.conformPassword.value;

    if (password !== conformPassword) {
    setError("Confirm password does not match");
    return;
    }

  const userInfo = {username,email,password};

  registerUser(userInfo);



  }

useEffect(()=>{
  if(user)
    navigate('/');
},[])


  return (
    <section className='flex flex-col justify-top items-center h-screen pt-20'>
      <form
  ref={registerForm}
  onSubmit={handleSubmit}
  className="w-[500px] bg-white shadow-lg border border-gray-200 p-5 text-black flex flex-col gap-5 rounded-xl"
>
  <div className="flex flex-col gap-3">
    <label htmlFor="username">Userame</label>
    <input
      type="text"
      name="username"
      placeholder="Enter your username"
      required
    />
  </div>


  <div className="flex flex-col gap-3">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
    />
  </div>

  <div className="flex flex-col gap-3" >
    <label htmlFor="password">Password</label>
    <input
      type="password"
      name="password"
      required
      
      placeholder="Enter your password"
    />
  </div>

  <div className="flex flex-col gap-3">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input
      type="password"
      name="conformPassword"
      required
     
      placeholder="Confirm your password"
    />
  </div>

  <div className="flex flex-col">
    <button type="submit" className="registerBtn pointer">
      Sign Up
    </button>
    <p>
      Already have an account?
      <Link to="/login" className="underline text-blue-800">
        {' '}
        Login
      </Link>
    </p>
  </div>
  <div className="error">{error}</div>
</form>

    </section>

  )
}

export default Register
