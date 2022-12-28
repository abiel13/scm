import React, { useState } from "react";
import {
  FaSchool,
  FaLandmark,
  FaProcedures,
  FaBatteryHalf,
  FaChevronRight,
  FaChevronLeft,FaChalkboardTeacher
} from "react-icons/fa";
import { BiHelpCircle, BiConversation } from "react-icons/bi";

function SideBar(props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`${visible ?'w-3/4' : 'w-1/5'} transition-all  ease-in duration-300 flex relative flex-col items-center justify-between h-screen px-3 py-3 bg `}>
      <div className="absolute -right-3 font-extrabold cursor-pointer bg text-white w-8 h-8 flex items-center justify-end px-1 t -translate-y-full bg-red-500">
        <p
          onClick={() => {
            setVisible((prev) => !prev);
          }}
        >
       {visible?<FaChevronLeft />:  <FaChevronRight />}
        </p>
      </div>
      <div className="text-purple-500 font-bold text-center">
        {props.name[0]} schools{" "}
      </div>
      <ul className="w-full flex flex-col  items-start md:items-center gap-10 mt-8">
        <li className="flex items-center gap-4">
          <FaSchool className="text-white text-2xl " />
<div className={` ${visible?'block' : 'hidden'} transition-all text-white font-medium text-lg`} >Student Registration</div>
        </li>
        <li className="flex items-center gap-4">
          <FaLandmark className="text-white text-2xl" />
<div className={` ${visible?'block' : 'hidden'} text-white font-medium text-lg`} >Administration</div>
        </li>
        <li className="flex items-center gap-4">
          <FaProcedures className="text-white text-2xl" />
          <div className={` ${visible?'block' : 'hidden'} text-white font-medium text-lg`} >Finance Management</div>
        </li>
        <li className="flex items-center gap-4">
          <FaChalkboardTeacher className="text-white text-2xl" />
<div className={` ${visible?'block' : 'hidden'} text-white font-medium text-lg`} > Teachers</div>

        </li>
      </ul>
      <ul className="w-full flex flex-col   items-start md:items-center gap-10 mt-8">
      <li className="flex items-center gap-4">
          <BiHelpCircle className="text-white text-2xl" />
          <div className={` ${visible?'block' : 'hidden'} text-white font-medium text-lg`} >Help and Support</div>

        </li>
        <li className="flex items-center gap-4">
          <BiConversation className="text-white text-2xl" />{" "}
          <div className={` ${visible?'block' : 'hidden'} text-white font-medium text-lg`} >Contact Us</div>

        </li>
      </ul>
    </div>
  );
}

export default SideBar;
