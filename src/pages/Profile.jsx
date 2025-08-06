import React from 'react'
import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();
 
  

  if (!user) return <p>Loading...</p>;

  return (
    <section className="h-auto flex flex-col md:flex-row gap-5 text-black p-4">

      <div className="bg-gray-200/70 border border-gray-200 rounded-xl flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p>{user.email}</p>
        <p>Email Verified: {user.emailVerification ? "Yes" : <><p className='secondaryBtn'><Link to='/EmailVerification'>Verify Now</Link></p></>}</p>
        <p>Phone: {user.phone || "Not Provided"}</p>
        <p>Phone Verified: {user.phoneVerification ? "Yes" : "No"}</p>
        <p>Status: {user.status ? "Active" : "Inactive"}</p>
      </div>

      <div className="bg-gray-200/70 border border-gray-200 rounded-xl p-4 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-2">Account Details</h3>
        <ul className="space-y-1">
          <li><strong>User ID:</strong> {user.$id}</li>
          <li><strong>Created At:</strong> {user.$createdAt}</li>
          <li><strong>Updated At:</strong> {user.$updatedAt}</li>
          <li><strong>Last Accessed:</strong> {user.accessedAt}</li>
          <li><strong>Password Last Updated:</strong> {user.passwordUpdate}</li>
          <li><strong>Registration:</strong> {user.registration}</li>
          <li><strong>MFA Enabled:</strong> {user.mfa ? "Yes" : "No"}</li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
