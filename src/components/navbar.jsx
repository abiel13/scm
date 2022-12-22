import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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
          <NavLink className="text-white font-medium  ">Home</NavLink>
        </li>
        <li className="navlist">
          <NavLink to="/about" className="text-white font-medium">
            About
          </NavLink>
        </li>{" "}
        <li className="navlist">
          <NavLink to="/teams" className="text-white font-medium">
            Our Team
          </NavLink>
        </li>{" "}
        <li className="navlist">
          <NavLink to="/contact" className="text-white font-medium">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="text-white font-medium">
            Products
          </NavLink>
        </li>
        <div className="flex flex-col gap-6 lg:block">
          <button className="bg-red-400 py-2 mx-4 px-7 font-medium text-white rounded-md">
            Sign UP
          </button>
          <button className="bg-red-400 py-2 px-7 font-medium text-white rounded-md">
            Login
          </button>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
