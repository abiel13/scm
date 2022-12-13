import React from 'react'
import webp from '../images/Group 2.png'
import logo from "../images/SMP.png";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="bg-zinc-900 w-screen h-screen px-3 overflow-hidden lg:bg-white">
      <nav className="min-w-screen py-3  flex justify-between content-center ">
        <img src={logo} alt="SMP" />
        <div className="flex gap-10">
          <Link to='/login' className="px-5 rounded-md py-1 text-white font-medium bg-red-400">
            login
          </Link>
          <Link to='/signup' className='hidden rounded-md lg:block px-4 py-1 text-white font-medium bg-red-400'>Join Us</Link>
        </div>
      </nav>
      <div className="w-screen  px-5 h-3/4 mt-12  flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <img src={webp} className="hidden self-center lg:block" alt="" />
        <h1 className='text-4xl text-center leading-10  font-extrabold text-red-400 lg:hidden '>School Management Program</h1>
        <p className="font-light w-20vh  text-xl text-center px-4 text-white md:text-center  lg:text-gray-500  lg:text-left lg:font-medium lg:self-start  ">
       The Only Software You Need To Manage Your School.
        </p>
        <Link to='/signup' className="px-5 w-1/2 text-center py-3 rounded-md mt-2 font-medium  text-white bg-red-400 hover:bg-red-500 md:w-1/3  lg:hidden">
          Join Us Now
        </Link>
      </div>
    </div>

    </div>
  )
}

export default Home