import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './signup'
import SchoolDashBoard from './schoolPages/SchoolDashBoard'
import SchoolHome from './schoolPages/schoolHome'
import StudentRegistration from './schoolPages/studentRegistration'
import AdminPage from './AdminPage'
import Finance from './schoolPages/finance'
import Contact from './schoolPages/contact'
import Help from './schoolPages/help'
import Teachers from './schoolPages/Teachers'

function Pages() {
  return (
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />}/>
    <Route path='/school/:name' element={<SchoolDashBoard />}>
    <Route path='' element={<SchoolHome />}/>
      <Route path="/school/:name/studentRegistration" element={<StudentRegistration />} />
      <Route path="/school/:name/Administration" element={<AdminPage />} />
      <Route path="/school/:name/Finance" element={<Finance />} />
      <Route path="/school/:name/Contact" element={<Contact />} />
      <Route path="/school/:name/Help" element={<Help />} />
      <Route path="/school/:name/Teachers" element={<Teachers />} />

    </Route>
   </Routes>
  )
}


export default Pages