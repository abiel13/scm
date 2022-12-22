import React, { useEffect } from "react";
import webp from "../images/Rectangle 1.png";
import nerd from "../images/nerd.jpeg";
import nerds from "../images/NERDS.jpeg";

import logo from "../images/SMP@2x.svg";
import a from "../images/a.png";
import elipse from "../images/Ellipse 1.png";
import kid from "../images/30.png";
import b from "../images/bb.jpeg";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsApple, BsBarChartFill, BsGraphUp } from "react-icons/bs";
import { BiCopy, BiCopyright, BiListCheck } from "react-icons/bi";

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
      <section className="w-screen px-5 flex-col items-center flex overflow-hidden mt-24 h-screen">
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
      <section className="w-screen px-5 flex-col items-center flex overflow-hidden mt-24 h-screen">
        <h3 className="text-center text-3xl text-blue-500 ">SMP Feautures</h3>
        <p className="mt-4 text-lg font-medium">
          Best Collaboration, Flexible and Intuitive
        </p>
        <div className="flex justify-between items-center  w-full p-5">
          <img
            data-aos="fade-right"
            src={kid}
            alt="image"
            className="h-full w-2/5  object-cover"
          />
          <div className="h-full  px-3 py-3  mr-24">
            <h3 className="text-blue-500 font-medium text-xl">
              A unique and standardised approach to education
            </h3>
            <ul className="leading-8 text-gray-500">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Educational platform that provides ultimate peace of mind
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                SMP manage the challenges and deliver the best for your school
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Comply with regulations and eliminate manual administration
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Student Record Management
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="5000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Student & staff Attendance Reporting
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="6000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                In built SMS messaging (add-on)
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="7000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Data Import and Export
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="8000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                eLearning for Staff Training (add-on)
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="9000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Child Progression & Development
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="10000"
                className="flex mt-2 items-center"
              >
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Status Visibility and Reports
              </div>
            </ul>
          </div>
        </div>
        <hr className="w-full my-8 text-gray-600" />
      </section>
      <section className="w-screen px-5 flex-col items-center flex overflow-hidden mt-24 h-screen">
        <div className="w-11/2 h-full flex items-center justify-between px-5">
          <div
            data-aos="fade-right"
            className="w-1/2 h-1/2 flex flex-col items-center"
          >
            <h3 className="text-blue-500 font-medium text-2xl">
              User-friendly dashboard for staff and admins
            </h3>
            <ul>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>Give access to staff and teachers based on requirements</p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                  Easily transition your student from classroom, grade, scheme
                  or centre
                </p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                  Generate reports as needed based on school needs and demands
                </p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                  {" "}
                  Manage your students and staff clock-in and clock-out with
                  ease
                </p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                  {" "}
                  Built with great flexibility to customise your data based on
                  your needs
                </p>
              </div>
            </ul>
          </div>
          <img
            src={nerd}
            alt=""
            data-aos="fade-left"
            className="w-5/12 object-cover"
          />
        </div>
      </section>
      <hr />
      <section className="w-screen px-5 flex-col items-center flex overflow-hidden mt-24 h-screen">
        <div className="w-11/2 h-full flex items-center justify-between px-5">
          <img
            src={nerds}
            alt=""
            data-aos="fade-right"
            className="w-5/12 object-cover"
          />
          <div
            data-aos="fade-left"
            className="w-1/2 h-1/2 flex flex-col items-center"
          >
            <h3 className="text-blue-500 font-medium text-2xl">
            Manage multiple centres with one school accoun
            </h3>
            <ul>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p> Grant access to centre or regional managers
 </p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                Assign teachers to grades, classrooms, schemes and centres
                </p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                Transfer students from centre to another
                </p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                  {" "}
                  Assign students to schemes and classes with ease
                </p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                  {" "}
                  Relocate or assign teacher to multiple classroom and centres
                </p>
              </div>
            </ul>
          </div>
        </div>
      </section>
     

     <footer className="w-screen h-max bg-blue-500 text-center py-3 flex items-center text-white gap-2 justify-center">
<p>Copyright</p> <BiCopyright /> <p>SMP</p>
     </footer>
    </div>
  );
}

export default Home;
