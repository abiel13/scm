import React from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../components/SideBar';

function SchoolDashBoard() {
let params = useParams();


    return (
  <div className='w-screen min-h-screen'>
<SideBar name={params.name} />
  </div>
    
  )
}

export default SchoolDashBoard