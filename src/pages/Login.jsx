import React from 'react'
import logo from "../images/SMP@2x.svg";


function Login() {

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
<div className='w-4/5 h-4/5 shadow-lg flex'>
  <div className='h-full w-1/2 py-2 px-3  flex relative flex-col items-center' >
  <img src={logo} alt="" className='w-1/12 self-start' />
  <form className='px-3 py-2 w-3/4 mt-6 h-5/6 absolute bottom-0 bg-white flex flex-col items-center'  action="">
    <div><h2>Welcome Back</h2>
<p>Log into your accoount</p></div>

  </form></div>
  <div className='w-1/2 h-full login flex items-center justify-center '>
    <h3 className='text-white font-bold text-4xl'>Login in to Your SMP Account</h3>
  </div>
 
</div>

    </div>
  )
}

export default Login