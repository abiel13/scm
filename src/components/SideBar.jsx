import React, { useState } from "react";
import {
  FaSchool,
  FaLandmark,
  FaProcedures,
  FaBatteryHalf,
  FaChevronRight,
  FaChevronLeft,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BiHelpCircle, BiConversation } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function SideBar(props) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`${
        visible ? "w-3/4" : "w-1/5"
      } transition-all z-50  ease-in duration-300 flex fixed top-0 left-0 flex-col items-center justify-between h-screen px-3 py-3 bg lg:w-2/12`}
    >
      <div className="absolute -right-3 font-extrabold cursor-pointer lg:hidden bg text-white w-8 h-8 flex items-center justify-end px-1 t -translate-y-full bg-red-500">
        <p
          onClick={() => {
            setVisible((prev) => !prev);
          }}
        >
          {visible ? <FaChevronLeft /> : <FaChevronRight />}
        </p>
      </div>
      <div className="text-purple-500 font-bold text-center">
        <p className={`hidden lg:block`} >{props.name} <br /> schools</p>
        <p className={`block lg:hidden`} >{props.name[0]} schools{" "}</p>
        
      </div>
      <ul className="md:px-5 w-full flex flex-col  items-start  lg:items-start lg:px-2 gap-10 mt-8">
        <NavLink
          to={`/school/${props.name}/studentRegistration`}
          className={`${visible?'':'w-full justify-center'} flex items-center gap-4`}

        >
          <FaSchool className="text-white text-2xl " />
          <div
            className={` ${
              visible ? "block" : "hidden"
            } transition-all lg:block text-white font-medium text-lg lg:text-base`}
          >
            Student Registration
          </div>
        </NavLink>
        <NavLink
          to={`/school/${props.name}/Administration`}
          className={`${visible?'':'w-full justify-center'} flex items-center gap-4`}
        >
          <FaLandmark className="text-white text-2xl" />
          <div
            className={` ${
              visible ? "block" : "hidden"
            } text-white lg:block font-medium text-lg lg:text-base`}
          >
            Administration
          </div>
        </NavLink>
        <NavLink
          to={`/school/${props.name}/Finance`}
          className={`${visible?'':'w-full justify-center'} flex items-center gap-4`}

        >
          <FaProcedures className="text-white text-2xl md:text-4xl" />
          <div
            className={` ${
              visible ? "block " : "hidden"
            } text-white lg:block font-medium lg:text-base text-lg`}
          >
            Finance Management
          </div>
        </NavLink>
        <NavLink
          to={`/school/${props.name}/Teachers`}
          className={`${visible?'':'w-full justify-center'} flex items-center gap-4`}
        >
          <FaChalkboardTeacher className="text-white text-2xl md:text-4xl " />
          <div
            className={` ${
              visible ? "block" : "hidden"
            } text-white lg:block lg:text-base font-medium text-lg`}
          >
            {" "}
            Teachers
          </div>
        </NavLink>
      </ul>
      <ul className="w-full flex flex-col lg:px-2  items-start  lg:items-start gap-10 mt-8">
        <NavLink
          to={`/school/${props.name}/Help`}
          className={`${visible?'':'w-full justify-center'} flex items-center gap-4`}
        >
          <BiHelpCircle className="text-white text-2xl md:text-4xl" />
          <div
            className={` ${
              visible ? "block" : "hidden"
            } text-white lg:block lg:text-base font-medium text-lg`}
          >
            Help and Support
          </div>
        </NavLink>
        <NavLink
          to={`/school/${props.name}/Contact`}
          className={`${visible?'':'w-full justify-center'} flex items-center gap-4`}

        >
          <BiConversation className="text-white text-2xl md:4xl" />{" "}
          <div
            className={` ${
              visible ? "block" : "hidden"
            } text-white lg:block lg:text-base font-medium text-lg`}
          >
            Contact Us
          </div>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
