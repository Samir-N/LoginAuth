import  { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { account } from '../api/appwrite';

const VerificationComplete = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('Verifying your email...');


  useEffect(() => {
    const verifyEmail = async () => {

      const userId = searchParams.get('userId');
      const secret = searchParams.get('secret');

      if (!userId || !secret) {
        setVerified(false);
        setMessage('❌ Invalid verification link.');
        return;
      }

      try {
        
        await account.updateVerification(userId, secret);
        setMessage('✅ Email verified successfully!');
        setVerified(true);
        
      } catch (err) {
        console.error(err);
        setMessage('❌ Verification failed or link expired.');
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className='flex flex-col items-center pt-20'>
      <div className='w-auto bg-white shadow-lg border border-gray-200 p-5 text-black flex flex-col gap-5 rounded-xl justify-center'>
        <h1 className='text-[32px] font-bold text-center'>{message}</h1>
      </div>
    </div>
  );
};

export default VerificationComplete;
