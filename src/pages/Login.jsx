import React from "react";
import logo from "../images/SMP@2x.svg";

function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-4/5 h-4/5 shadow-lg flex">
        <div className="h-full w-full md:w-1/2 lg:w-1/2 py-2 px-3  flex relative flex-col items-center">
          <img src={logo} alt="" className="w-3/5 md:w-2/12 md:self-start lg:w-1/12 lg:self-start" />
          <form
            className="px-3 py-2 w-3/4 mt-6 h-5/6 relative md:absolute lg:absolute bottom-4 bg-white flex flex-col items-center"
            action=""
          >
            <div className=" w-3/4 md:1/2 lg:w-1/2 leading-4 text-center">
              <h2 className="font-medium text-2xl">Welcome Back</h2>
              <p className="w-full text-lg text-gray-500 ">Log into your accoount</p>
            </div>
            <div className="h-full flex-col flex px-3 w-full  justify-center md:w-3/4 lg:w-3/4 mt-9">
              <label className="flex flex-col items-start" htmlFor="">
                <p>Email</p>
                <input
                  type="Email"
                  className="border-b border-blue-400 px-1 py-1  outline-none text-sm w-full rounded-br-md"
                />
              </label>
              <label className="flex flex-col items-start mt-5" htmlFor="">
                <p>Password</p>
                <input
                  type="password"
                  className="border-b  border-blue-400 px-1 py-1  outline-none text-sm w-full rounded-br-md"
                />
              </label>
              <label className="flex flex-col items-start mt-5" htmlFor="">
                <p>Name Of School</p>
                <input
                  type="text"
                  className="border-b  border-blue-400 px-1 py-1  outline-none text-sm w-full rounded-br-md"
                />
              </label>
              <button className="bg-blue-400 px-3 self-center py-2 w-1/2 rounded-md text-white font-medium mt-4">Login</button>
            </div>
          </form>
        </div>
        <div className="hidden md:w-1/2 md:flex lg:w-1/2 h-full login flex-col lg:flex items-center justify-center ">
          <h3 className="text-white font-bold text-center text-4xl ">
            Login in to Your SMP Account
          </h3>
          <p className="text-white text-center">Your reliable management program</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
