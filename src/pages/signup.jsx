import React from "react";
import logo from "../images/SMP@2x.svg";

function Signup() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-11/12 h-4/5 shadow-xl flex">
        <div className="h-full w-full md:w-1/2 lg:w-1/2 py-2 px-3  flex relative flex-col items-center">
          <img src={logo} alt="" className="w-3/5 md:w-3/12 md:self-start lg:w-3/12 lg:self-start" />
          <form
            className="px-3 py-2 w-3/4 mt-6 h-5/6 relative md:absolute lg:absolute bottom-4 bg-white flex flex-col items-center"
            action=""
          >
            <div className=" w-3/4 md:1/2 lg:w-1/2 leading-4 text-center">
              <h2 className="font-medium text-xl">Sign Up For SMP Today</h2>
            </div>
            <div className="h-full flex-col flex px-3 w-full  justify-center md:w-3/4 lg:w-3/4 mt-9">
              
            </div>
          </form>
        </div>
        <div className="hidden md:w-1/2 md:flex lg:w-1/2 h-full signup flex-col lg:flex items-center justify-center ">
          <h3 className="text-white font-bold text-center text-4xl ">
            Create An Account With Us
          </h3>
          <p className="text-white text-center">Your reliable management program</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
