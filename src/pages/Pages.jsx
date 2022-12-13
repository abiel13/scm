import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './Home'
import SignUP from './SignUp'
import Login from './Login'

function Pages() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUP />} />
   </Routes>
  )
}



export default Pages