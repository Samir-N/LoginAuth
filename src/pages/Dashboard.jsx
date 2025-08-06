import { account } from '../api/appwrite';
import { useAuth } from '../utils/AuthContext';
import { useState } from 'react';

const EmailVerification = () => {
  const [message, setMessage] = useState("");

  const { loading, setLoading } = useAuth();

  const handleVerification = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      setLoading(true);
      await account.createVerification('http://localhost:5173/verified');
      setMessage("Check your email. Link has been sent");
    } catch (err) {
      console.log(err);
      setMessage("Error sending verification link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
    <h1>Dashboard</h1>
    </section>
  );
};

export default EmailVerification;