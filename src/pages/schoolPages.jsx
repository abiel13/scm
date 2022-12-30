import React from 'react'
import { Route, Routes } from 'react-router-dom'
import studentRegistration from './studentRegistration'

function SchoolPages() {
  return (
 <Routes>
    <Route path='/studentRegistration' element={studentRegistration} />
 </Routes>
  )
}


export default SchoolPages