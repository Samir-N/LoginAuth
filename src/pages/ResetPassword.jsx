import React from 'react'
import { useAuth } from '../utils/AuthContext'

const ResetPassword = () => {
    const {loading, setLoading} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
    } catch(err) {
      console.log(err);
    } finally {
      setTimeout(() => {
      setLoading(false);

          alert("Called");
        }, 5000);
    }
  }

  return (
    <div className='flex flex-col items-center pt-20'>
      <form
        onSubmit={handleSubmit}
        className='w-[500px] bg-white shadow-lg border border-gray-200 p-5 text-black flex flex-col gap-5 rounded-xl justify-center'
      >
        <h1 className='text-2xl font-bold text-center'>Reset Password</h1>

        <div className='flex flex-col gap-3'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' required placeholder='Find your email' />
        </div>
        <button className='primaryBtn' type='submit' disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>

      </form>
    </div>
  )
}

export default ResetPassword