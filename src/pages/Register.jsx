import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext'; // Assuming AuthContext is in utils folder

const Register = () => {
  const { registerUser, error, setError,clearError, user,loading } = useAuth();
  const registerForm = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
 
    clearError();

    if (user) {
      navigate('/'); 
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = registerForm.current;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.conformPassword.value; 



  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    const userInfo = { username, email, password };
    registerUser(userInfo);
  };

  return (
    <section className='flex flex-col justify-top items-center h-screen pt-20'>
      <form
        ref={registerForm}
        onSubmit={handleSubmit}
        className='w-[500px] bg-white shadow-lg border border-gray-200 p-5 text-black flex flex-col gap-5 rounded-xl'
      >
        <h1 className='text-2xl font-bold text-center'>Create Account</h1>

        <div className='flex flex-col gap-3'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Enter your username'
            required
            minLength={3}
          />
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            required
            placeholder='Enter your email'
          />
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            required
            minLength={6}
            placeholder='Enter your password'
          />
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='conformPassword'>Confirm Password</label>
          <input
            type='password'
            name='conformPassword' 
            required
            minLength={6}
            placeholder='Confirm your password'
          />
        </div>

        {error && (
          <div className='error'>
            <p>⚠️ {error}</p>
          </div>
        )}

        <div className=' flex  flex-col gap-3'>
          <button type='submit'  disabled={loading}  className={`primaryBtn ${loading ? 'bg-gray-400' : ''}`}>
            {loading?"Loading...":"Signup"}
          </button>
          <p className='text-center '>
            Already have an account?{' '}
            <Link to='/login' className='font-semibold text-blue-600 hover:underline'>
              Login
            </Link>
          </p>
        </div>

        <div className="line"></div>
        
      </form>
    </section>
  );
};

export default Register;