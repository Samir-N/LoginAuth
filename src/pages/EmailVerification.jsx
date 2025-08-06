import { account } from '../api/appwrite';
import { useAuth } from '../utils/AuthContext';
import { useState } from 'react';

const EmailVerification = () => {
  const{error,setError} = useAuth();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleVerification = async (e) => {
    e.preventDefault();
    setMessage(""); 

    try {
   
      setLoading(true);
      
      await account.createVerification('http://localhost:5173/verified');
      setMessage("Check your email. Link has been sent");
    } catch (err) {
      setError(true);
      console.log(err);
      setMessage("Error sending verification link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className='flex flex-col items-center pt-20'>
        <form
          className='w-[500px] bg-white shadow-xl border border-gray-200 p-5 text-black flex flex-col gap-5 rounded-xl justify-center'
          onSubmit={handleVerification}
        >
          <h1 className='text-2xl font-bold text-center'>Verify Email</h1>

          <button
            type="submit"
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Verify Now'}
          </button>

          {message && <p className={`text-center ${error ? "text-red-600" : "text-black"} `}>
  {message}
</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailVerification;