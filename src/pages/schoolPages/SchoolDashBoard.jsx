import React from 'react'
import {  Outlet, useParams } from 'react-router-dom'
import SideBar from '../../components/SideBar';


function SchoolDashBoard() {
let params = useParams();


    return (
  <div className='w-screen min-h-screen flex overflow-x-hidden '>
<SideBar name={params.name} />
<div className='fixed right-0 px-3 py-2 bg-slate-700 w-4/5 min-h-full'>
  <Outlet/>
</div>

  </div>
    
  )
}

export default SchoolDashBoard