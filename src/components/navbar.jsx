import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from '../images/menu.png'
import { Link } from "react-scroll";

function Navbar() {
  const [active, setActive] = useState(false);
  const trans = active ? "translate-x-0" : "translate-x-full";
  return (
    <>
      <div>
        <img src={menu}
          className="w-7 cursor-pointer lg:hidden"
          onClick={() => {
            setActive((prev) => !prev);
          }}
        />
      </div>
      <ul
        className={` fixed ${trans} w-1/2 h-screen top-0 right-0 lg:h-max flex-col justify-around transition-transform ease-in-out duration-500 items-center  bg-white p-5 z-50 flex gap-10 lg:bg-transparent lg:flex-row lg:transition-none lg:relative lg:translate-x-0`}
      >
        <div
          onClick={() => {
            setActive((prev) => !prev);
          }}
          className="self-end fixed top-8  text-xl cursor-pointer hover:border-red-400 text-red-400 font-bold border px-2 lg:hidden "
        >
          X
        </div>
        <li className="navlist">
          <Link to="home" duration={1000} onClick={() => {
            setActive((prev) => !prev);
          }} smooth={true} className="  cursor-pointer lg:text-white font-medium">Home</Link>
        </li>
        <li className="navlist">
          <Link smooth={true} onClick={() => {
            setActive((prev) => !prev);
          }} to="About" className="cursor-pointer lg:text-white   font-medium">
            About
          </Link>
        </li>{" "}
        {" "}
        
        <li>
          <Link smooth={true} onClick={() => {
            setActive((prev) => !prev);
          }}  to="Feautures" className="cursor-pointer lg:text-white font-medium">
          Feautures 
          </Link>
        </li>
        <li>
          <Link smooth={true} onClick={() => {
            setActive((prev) => !prev);
          }} to="Testimonials" className="cursor-pointer lg:text-white font-medium">
          Testimonials 
          </Link>
        </li>
        <NavLink to='/login' className="bg-red-400 py-2 px-7 font-medium text-white rounded-md lg:hidden">
            Login
          </NavLink>

      </ul>
      <div className="hidden lg:flex  gap-6 ">
          <NavLink to='/signup' className=" lg:block bg-red-400 py-2 mx-4 px-7 font-medium text-white rounded-md">
            Sign UP
          </NavLink>
          <NavLink to='/login' className="bg-red-400 py-2 px-7 font-medium text-white rounded-md">
            Login
          </NavLink>
        </div>
    </>
  );
}

export default Navbar;
