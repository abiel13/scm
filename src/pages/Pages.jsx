import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './signup'
import SchoolDashBoard from './SchoolDashBoard'

function Pages() {
  return (
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />}/>
    <Route path='/school/:name' element={<SchoolDashBoard />}/>
   </Routes>
  )
}


export default Pages