import fav from '../images/Nasim.png'
import ak from '../images/3d.png'
import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden items-center p-5 lg:flex-row  "> 
    <div className=" w-full h-full  p-5 flex items-center flex-col lg:flex-row lg:relative ">
      <div className="bg-red-800 relative w-3/4 h-2/5 rounded-md  md:w-1/2 lg:hidden">
<img src={fav} alt="" className="rounded-md h-full w-full object-cover" />

<p className="absolute text-center font-medium text-xl text-white w-3/4 left-1/2 -translate-x-1/2 bottom-0 ">Login to your account</p>
      </div>
      {/* immage for new 3d rendering */}
      <div className="h-2/4 w-2/5  ">
      <img src={ak} alt="" className="hidden lg:h-full object-cover absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 self-end lg:block" />  
      </div>


      <div className="w-3/4 flex flex-col justify-center items-center md:w-1/2 lg:w-1/3 lg:shadow-2xl  lg:absolute lg:left-3/4 lg:-translate-x-3/4 lg:h-3/4 lg:text-center lg:px-5">
        <h1 className="hidden lg:text-orange-400 font-extrabold text-3xl lg:block">Login to Your SMP Account</h1>
      <p className="mt-3  w-full font-medium text-xl  text-gray-500  ">here at SMP we give special privelledges to Schools, Parents Teachers and Students</p>
    <select name="" id="" className="mt-3 p-3 font-medium border-none outline-none shadow-md w-full">
      <option  value="">Select An Option</option>
      <option value="School">School</option>
      <option value="Teacher">Student</option>
    </select>



     <button className="mt-10 bg-orange-400 px-12 py-2 w-full font-medium rounded-md text-white text-xl">Login</button>
<p>or</p>
<Link to='/signup' className="mt-4 text-center bg-white px-12 py-2 w-3/4 font-medium rounded-md text-black shadow-md text-xl">Sign Up</Link>
      </div>


    </div>


    </div>


  )
}

export default Login