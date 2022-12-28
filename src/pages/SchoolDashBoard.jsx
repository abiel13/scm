import React from 'react'
import { useParams } from 'react-router-dom'
import Chart from '../components/lineChart';

import SideBar from '../components/SideBar';

function SchoolDashBoard() {
let params = useParams();


    return (
  <div className='w-screen min-h-screen flex overflow-x-hidden '>
<SideBar name={params.name} />
<Chart />
  </div>
    
  )
}

export default SchoolDashBoard