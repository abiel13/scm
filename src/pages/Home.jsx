import React, { useEffect } from "react";
import webp from "../images/Rectangle 1.png";
import logo from "../images/SMP@2x.svg";
import a from "../images/a.png";
import elipse from "../images/Ellipse 1.png";
import b from "../images/bb.jpeg";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsApple, BsBarChartFill, BsGraphUp } from "react-icons/bs";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="overflow-x-hidden scr flex flex-col gap-14">
      <div className="w-screen h-screen home relative  p-5  ">
        <nav className="flex justify-between  items-center">
          <img src={logo} alt="" />
          <ul className="flex gap-10">
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
          </ul>

          <div>
            <button className="bg-red-400 py-2 px-7 font-medium text-white rounded-md">
              Login
            </button>
            <button className="bg-red-400 py-2 mx-4 px-7 font-medium text-white rounded-md">
              Sign UP
            </button>
          </div>
        </nav>

        <div className="w-11/12  absolute left-0 -translate-x-7 h-4/5 flex items-center">
          <div className="w-full relative h-3/4 flex ">
            <img src={webp} alt="" className="w-full absolute h-full" />
            <img
              src={a}
              className="z-40 right-0 absolute h-3/4  bottom-4"
              alt=""
            />
            <div className="text-white  mt-6 z-50 w-1/2 px-14 py-7 flex    flex-col">
              <p className="font-bold text-5xl">School Management Program</p>
              <p className="mt-8 font-light w-3/4">
                Beautifully Designed and intellegently Developed School
                Management System For Best User Experience, We Put In Years Of
                Work In Building What Works Best For Your Schools
              </p>
              <button className="bg-red-400 shadow-md w-1/3 py-3 mt-6 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <img src={elipse} alt="" className="absolute bottom-0 right-0" />
      </div>{" "}
      <section id="About" className="w-screen overflow-hidden mt-24 h-screen">
        <h1 className="text-black text-6xl text-center font-medium ">
          About Us
        </h1>
        <div className=" w-full h-full px-5 flex items-center  ">
          <div className="w-full h-3/4 flex justify-between px-6  ">
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className=" px-3 flex flex-col justify-center items-center py-2 text-center w-2/4"
            >
              <h3 className="text-4xl font-sans font-bold  ">
                Our Creative Process
              </h3>
              <p className="mt-8 text-left  w-3/4 ">
                We Collaborate We The Finest Programmers in the Tech Space To
                Bring You A Products That Matches Your Needs
              </p>
              <p className="mt-2 text-left w-3/4 ">
                Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Natus, pariatur.
                <button className="bg-black text-white block py-2 px-3 mt-5 w-1/2">
                  Join Us
                </button>
              </p>
            </div>
            <img
              data-aos="fade-left"
              src={b}
              alt=""
              className="max-h-full w-3/4 object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-screen px-5 flex-col items-center flex overflow-y-hidden mt-24 h-screen">
        <div>
          <h3 className="my-8 text-center font-medium text-3xl text-blue-500">
            What Makes Us Different
          </h3>
          <p className="text-center font-medium font-2xl my-3">
            Easy to use, customisable and effective
          </p>
        </div>

        <div className="w-3/5 leading-8 text-gray-500 text-lg text-center  ">
          School Management Program popularly known as SMP is an all-in-one
          education software where you can manage and track your student
          progression, teachers' profile with an amazing and intelligent
          reporting system to help you save money, comply with regulations,
          eliminate manual administration and many more…
        </div>
        <div className="w-full mt-24 flex justify-between ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="cards flex flex-col  items-center w-1/4 py-3 px-5 bg-white shadow-md "
          >
            <BsApple className="text-blue-500 text-3xl" />
            <p className="text-blue-500 my-3">Better approach to education</p>
            <p className="text-gray-500 text-center my-3 leading-7">
              SMP will improve efficiency and make the best of your most
              valuable time. Create aistear & siolta assessment, milestones,
              sleep check, nappy, activity reports with easy. It comes with
              inteligent attendance tracking
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="cards flex flex-col  items-center w-1/4 py-3 px-5 bg-white shadow-md "
          >
            <BsBarChartFill className="text-blue-500 text-3xl" />
            <p className="text-blue-500 my-3">SMP is Flexible & Customisable</p>
            <p className="text-gray-500 text-center my-3 leading-7">
              SMP can be customised based on your school needs. Create distinct
              records and reports with your school name and logo. It is flexible
              to use and inteligent, making daily cumbersome routines more
              flexible
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="cards flex flex-col  items-center w-1/4 py-3 px-5 bg-white shadow-md "
          >
            <BsGraphUp className="text-blue-500 text-3xl" />
            <p className="text-blue-500 my-3">Aid Academic Progress</p>
            <p className="text-gray-500 text-center my-3 leading-7">
              Easy transition from those bulky paper work. Locate students and
              teachers records easily with the click of a mouse. SMP will help
              your school to reduce unnecessary costs and overheads
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen px-5 flex-col items-center flex overflow-y-hidden mt-24 h-screen">
<h3 className="text-center text-3xl text-blue-500 ">SMP Feautures</h3>
<p className="mt-4 text-lg font-medium">Best Collaboration, Flexible and Intuitive</p>
<div>
  
</div>
      </section>
      <section id="Teams" className="w-screen overflow-y-hidden mt-24 h-screen">
        <h1 className="text-black text-6xl mt-8 text-center font-medium ">
          Our Team
        </h1>
        <p className="mt-2 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          architecto magni quos veritatis!
        </p>

        <div className=" w-full h-3/4 px-5 -mt-5 flex items-center  ">
          <div className="w-full h-3/4 flex gap-20  justify-between py-3 items-center px-6 ">
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="w-1/3 h-1/3 rounded-full bg-white">
                <img src={b} className="w-full h-full rounded-full" alt="" />
              </div>
              <p>Amino Joseph</p>
              <p>Lead Front End Engineer</p>
            </div>
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="w-1/3 h-1/3 rounded-full bg-white">
                <img src={b} className="w-full h-full rounded-full" alt="" />
              </div>
              <p>Amino Joseph</p>
              <p>Senior Back End Engineer</p>
            </div>
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="w-1/3 h-1/3 rounded-full bg-white">
                <img src={b} className="w-full h-full rounded-full" alt="" />
              </div>
              <p>Amino Joseph</p>
              <p>Digital Marketer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
