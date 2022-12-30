import React from 'react'
import { BrowserRouter, useParams } from 'react-router-dom'

import SideBar from '../components/SideBar';
import SchoolPages from './schoolPages';

function SchoolDashBoard() {
let params = useParams();


    return (
  <div className='w-screen min-h-screen flex overflow-x-hidden '>
<SideBar name={params.name} />
<SchoolPages
 />
  </div>
    
  )
}

export default SchoolDashBoard