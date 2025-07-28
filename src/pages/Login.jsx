import React, { useEffect, useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
const Login = () => {

  const {user,loginUser,error} = useAuth();
  const navigate = useNavigate();

  const loginForm = useRef(null);

  const handleSubmit = (e) => {

    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = {email,password};
    loginUser(userInfo);



  }

  useEffect(()=>{

    user?navigate('/'):navigate('/login');
  },[user]);

  return (
    <section className='flex flex-col justify-top items-center h-screen pt-20'>
      <form ref={loginForm} onSubmit={handleSubmit} action="" className=' w-[500px] bg-white shadow-lg border-1 border-gray-200 p-5  text-black flex flex-col  gap-5 rounded-xl'>

        <div className='flex flex-col gap-3'>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' required placeholder='' />
        </div>

        <div className='flex flex-col gap-3'>
        <label htmlFor="Password" >Password</label>
        <input type="password" name='password'  required placeholder='Enter your password' />
        </div>

          <div className='grid grid-cols-2   text-white '>
            <button className='loginBtn'>Login</button>
            <Link to='/register' className='registerBtn text-center'>Register</Link>


           
        </div>

        <div className='error'>
          {
            error?<p>⚠️{error}</p>:null
          }
        </div>

        
      </form>
    </section>
  )
}

export default Login
