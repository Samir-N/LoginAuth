import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import PrivateRouting from './utils/PrivateRouting'
import { AuthProvider } from './utils/AuthContext'

const App = () => {
  return (

    <div>
<AuthProvider>
     <Header/>
      <Routes>

     

       <Route element={<PrivateRouting/>}>
          <Route path='/profile' element={<Profile/>}/>
           <Route path='/' element={<Home />}/>
       </Route>

      <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>


      </Routes>

     
</AuthProvider>
    </div>
  )
}

export default App
