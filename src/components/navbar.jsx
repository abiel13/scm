import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [active, setActive] = useState(false);
  const trans = active ? "translate-y-0" : "-translate-y-full";
  return (
    <>
      <div>
        <FaBars
          className="text-white text-2xl cursor-pointer lg:hidden"
          onClick={() => {
            setActive((prev) => !prev);
          }}
        />
      </div>
      <ul
        className={` fixed ${trans} inset-0 flex-col  transition-transform ease-in-out duration-300 items-center h-max bg-gray-500 p-5 z-50 flex gap-10 lg:bg-transparent lg:flex-row lg:transition-none lg:relative lg:translate-y-0`}
      >
        <div
          onClick={() => {
            setActive((prev) => !prev);
          }}
          className="self-end fixed text-xl cursor-pointer hover:border-red-400 text-red-400 font-bold border px-2 lg:hidden "
        >
          X
        </div>
        <li className="navlist">
          <Link to="home" duration={1000} smooth={true} className="text-white cursor-pointer font-medium  ">Home</Link>
        </li>
        <li className="navlist">
          <Link smooth={true} to="About" className="cursor-pointer text-white  font-medium">
            About
          </Link>
        </li>{" "}
        {" "}
        
        <li>
          <Link smooth={true}  to="Feautures" className="cursor-pointer text-white font-medium">
          Feautures 
          </Link>
        </li>
        <li>
          <Link smooth={true}  to="Testimonials" className="cursor-pointer text-white font-medium">
          Testimonials 
          </Link>
        </li>
      </ul>
      <div className="flex flex-col gap-6 lg:flex-row">
          <NavLink to='/signup' className="hidden lg:block bg-red-400 py-2 mx-4 px-7 font-medium text-white rounded-md">
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
