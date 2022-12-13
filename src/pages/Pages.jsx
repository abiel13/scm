import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Login from './Login'

function Pages() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
   </Routes>
  )
}



export default Pages