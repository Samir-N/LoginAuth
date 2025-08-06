import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
const PrivateRouting = () => {

    const{user} = useAuth();
    const navigate = useNavigate();

useEffect(()=>{

    if(!user)
    {
        navigate('/login');
    }

},
[user]);

if(!user)
    return null;
return <Outlet/>
 
}

export default PrivateRouting
