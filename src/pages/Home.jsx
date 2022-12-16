import React from "react";
import webp from "../images/Rectangle 1.png";
import logo from "../images/SMP@2x.svg";
import a from "../images/a.png";
import elipse from "../Images/Ellipse 1.png";

import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen h-screen home relative  p-5 overflow-hidden ">
      <nav className="flex justify-between  items-center">
        <img src={logo} alt="" />
        <ul className="flex gap-10">
          <li className="navlist">
            <NavLink className='text-white font-medium  '>Home</NavLink>
          </li>
          <li className="navlist">
          <NavLink to='/about' className='text-white font-medium'>About</NavLink>
          </li> <li className="navlist">
          <NavLink to='/teams' className='text-white font-medium'>Our Team</NavLink>
          </li> <li className="navlist">
          <NavLink to='/contact' className='text-white font-medium'>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to='/products' className='text-white font-medium'>Products</NavLink>
          </li>
        </ul>

        <div><button className="bg-red-400 py-2 px-7 font-medium text-white rounded-md">
          Login
        </button>
        <button className="bg-red-400 py-2 mx-4 px-7 font-medium text-white rounded-md">
          Sign UP
        </button></div>
        
      </nav>
 
      <div className="w-11/12  absolute left-0 -translate-x-7 h-4/5 flex items-center">
        <div className="w-full relative h-3/4 flex ">
          <img src={webp} alt="" className="w-full absolute h-full" />
          <img src={a} className="z-40 right-0 absolute h-3/4  bottom-4" alt="" />
          <div className="text-white  mt-6 z-50 w-1/2 px-14 py-7 flex    flex-col">
            <p className="font-bold text-5xl">School Management Program</p>
            <p className="mt-8 font-light w-3/4">
              Beautifully Designed and intellegently Developed School Management
              System For Best User Experience, We Put In Years Of Work In
              Building What Works Best For Your Schools
            </p>
            <button className="bg-red-400 shadow-md w-1/3 py-3 mt-6 rounded-md">
              Get Started
            </button>
          </div>     
        </div>
      </div>
      <img src={elipse} alt="" className="absolute bottom-0 right-0"/>
    </div>
  );
}

export default Home;
