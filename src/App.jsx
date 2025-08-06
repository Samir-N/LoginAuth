import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import PrivateRouting from './utils/PrivateRouting'
import { AuthProvider } from './utils/AuthContext'
import Dashboard from './pages/Dashboard'
import ResetPassword from './pages/ResetPassword'
import EmailVerification from './pages/EmailVerification'
import Verified from './pages/Verified'
const App = () => {
  return (

    <div>
<AuthProvider>
     <Header/>
      <Routes>

     

       <Route element={<PrivateRouting/>}>
          <Route path='/profile' element={<Profile/>}/>
           <Route path='/dashboard' element={<Dashboard />}/>
           <Route path='/emailVerification' element={<EmailVerification />}/>

       
  

       </Route>
              <Route path='/resetPassword' element={<ResetPassword/>} />

        <Route path='/Verified' element={<Verified />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
  



      </Routes>

     
</AuthProvider>
    </div>
  )
}

export default App
