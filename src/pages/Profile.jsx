import React, { useEffect, useState } from 'react'
import { useAuth } from '../utils/AuthContext'
import { account } from '../api/appwrite.js'

const Profile = () => {
 
  
  const{user} = useAuth();
  console.log(user);

  return (
<section className="min-h-screen bg-white text-black p-4">
  <div className="max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden border border-gray-200">
    
    <div className="bg-black text-white text-center py-8">
      <h1 className="text-3xl font-bold">{user.name}</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gray-100 p-4 border-r md:border-b-0 border-b md:border-r border-gray-200">
        <p className="font-medium">📧 Email:</p>
        <p className="text-gray-800 italic ">{user.email}</p>
      </div>

      <div className="bg-pink-100 p-4 border-r md:border-b-0 border-b md:border-r border-gray-200">
        <p className="font-medium">🎯UserId</p>
        <p className="text-gray-700 italic">{user.$id}</p>
      </div>

    </div>
  </div>
</section>

  )
}

export default Profile
