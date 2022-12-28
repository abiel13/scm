import React, { useEffect } from "react";
import nerd from "../images/nerd.jpeg";
import nerds from "../images/NERDS.jpeg";
import logo from "../images/SMP.svg";
import butt from "../images/Ellipse 1.png";
import ccc from "../images/Ellipse 2.png";
import kid from "../images/30.png";
import b from "../images/bb.jpeg";
import Aos from "aos";
import bottom from "../images/Saly-16.png";
import "aos/dist/aos.css";
import { BsApple, BsBarChartFill, BsGraphUp } from "react-icons/bs";
import { BiCopy, BiCopyright, BiListCheck } from "react-icons/bi";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="home" className="overflow-x-hidden scr flex flex-col gap-14">
      <div className="w-screen h-screen  relative    ">
        <div className="w-full h-2/4 bg relative px-4">
          <div className="flex items-center w-full  justify-between">
            {" "}
            <img src={logo} alt="" className="w-32 py-3 " />
            <Navbar />
          </div>
          
          <div className="w-full  z-40 h-full  absolute inset-0 flex flex-col items-start justify-center px-2 text-white">
            <h1 className="text-3xl mt-5 font-medium w-11/12 md:text-6xl">
              School <span className="text-purple-500">Management</span> Program{" "}
            </h1>
            <p className="text-sm w-3/4 leading-2 font-sans font-medium md:text-2xl md:mt-4 ">
              Beautifully Designed and intellegently Developed School Management
              System For Best User Experience, We Put In Years Of Work In
              Building What Works Best For Your Schools
            </p>
          </div>
        </div>

        <img
          src={bottom}
          alt=""
          className="absolute top-1/2 -translate-y-1/2 -right-10"
        />
        <img src={butt} alt="" className="absolute bottom-0 right-0 w-20 " />
        <img src={ccc} alt="" className="absolute bottom-0  left-0 w-1/2 " />
        <div className="w-full h-1/3 absolute flex items-center  justify-center bottom-0">
          <Link
            to="/signup"
            className="bg py-3 px-3 text-white font-medium w-1/3 text-center rounded-md md:text-2xl md:py5 "
          >
            Get Started
          </Link>
        </div> 
      </div>{" "}
      <section
        id="About"
        className="w-screen overflow-hidden mt-24 min-h-screen lg:h-screen"
      >
        <h1 className="text-black text-6xl text-center font-medium ">
          About Us
        </h1>
        <div className=" w-full h-full px-5 mt-5 flex  items-center  ">
          <div className="w-full h-3/4  py-5 gap-10 flex-col flex md:flex-row lg:flex-row justify-between px-6  ">
            <div
              data-aos-duration="1000"
              data-aos="fade-right"
              className=" px-3 flex flex-col justify-center items-center py-2 text-center lg:w-2/4"
            >
              <h3 className="text-4xl font-sans font-bold  ">
                Our Creative Process
              </h3>
              <p className="w-3/4 text-center mt-8 md:text-xl md:text-left lg:text-left   ">
                We Collaborate We The Finest Programmers in the Tech Space To
                Bring You A Products That Matches Your Needs
              </p>
              <p className="mt-2  w-3/4   flex flex-col items-center md:text-left md:items-start lg:items-start lg:text-left lg:text-sm md:text-sm">
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
              className="w-full md:max-h-full md:w-1/2 lg:max-h-full lg:w-3/4 object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-screen px-5 flex-col items-center flex overflow-hidden mt-24 lg:h-screen">
        <div>
          <h3 className="my-8 text-center font-medium text-3xl text-blue-500">
            What Makes Us Different
          </h3>
          <p className="text-center font-medium font-2xl my-3">
            Easy to use, customisable and effective
          </p>
        </div>

        <div className="leading-8 text-gray-500 text-lg text-center lg:w-3/5   ">
          School Management Program popularly known as SMP is an all-in-one
          education software where you can manage and track your student
          progression, teachers' profile with an amazing and intelligent
          reporting system to help you save money, comply with regulations,
          eliminate manual administration and many more…
        </div>
        <div className="w-full mt-24 flex flex-col items-center gap-4 justify-between lg:flex-row">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="cards flex flex-col w-4/5   items-center lg:w-1/4 py-3 px-5 bg-white shadow-md "
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
            className="cards flex flex-col w-4/5  items-center lg:w-1/4 py-3 px-5 bg-white shadow-md "
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
            className="cards flex flex-col w-4/5   items-center lg:w-1/4 py-3 px-5 bg-white shadow-md "
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
      <section
        id="Feautures"
        className="w-screen px-5 flex-col items-center flex overflow-hidden mt-24 lg:h-screen"
      >
        <h3 className="text-center text-3xl text-blue-500 ">SMP Feautures</h3>
        <p className="mt-4 text-lg font-medium">
          Best Collaboration, Flexible and Intuitive
        </p>
        <div className="flex flex-col justify-between items-center  w-full p-5 md:flex-row lg:flex-row">
          <img
            data-aos="fade-right"
            src={kid}
            alt="image"
            className="h-full md:w-2/5 lg:w-2/5  object-cover"
          />
          <div data-aos="fade-left" className="h-full  px-3 py-3  lg:mr-24">
            <h3 className="text-blue-500 font-medium text-xl">
              A unique and standardised approach to education
            </h3>
            <ul className="leading-8 text-gray-500">
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Educational platform that provides ultimate peace of mind
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                SMP manage the challenges and deliver the best for your school
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Comply with regulations and eliminate manual administration
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Student Record Management
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Student & staff Attendance Reporting
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                In built SMS messaging (add-on)
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Data Import and Export
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                eLearning for Staff Training (add-on)
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Child Progression & Development
              </div>
              <div className="flex mt-2 items-center">
                {" "}
                <BiListCheck className="text-green-400 text-xl" />
                Status Visibility and Reports
              </div>
            </ul>
          </div>
        </div>
        <hr className="w-full my-8 text-gray-600" />
      </section>
      <section className="w-screen px-5 flex-col items-center flex overflow-hidden mt-24 lg:h-screen">
        <div className="w-11/2 h-full flex-col flex items-center justify-between px-5 md:flex-row lg:flex-row">
          <div
            data-aos="fade-right"
            className="lg:w-1/2 h-1/2 flex flex-col items-center"
          >
            <h3 className="text-blue-500 font-medium text-2xl">
              User-friendly dashboard for staff and admins
            </h3>
            <ul>
              <div className="flex items-center  mt-3 text-gray-500">
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
            className="mt-4 md:w-5/12 lg:w-5/12 lg:mt-0 object-cover"
          />
        </div>
      </section>
      <hr />
      <section
        id="Testimonials"
        className="w-screen px-5 flex-col items-center flex overflow-hidden mt-24 lg:h-screen"
      >
        <div className="w-11/2 h-full flex flex-col items-center  justify-between px-5 md:flex-row lg:flex-row">
          <img
            src={nerds}
            alt=""
            data-aos="fade-right"
            className="md:w-5/12 lg:5/12 object-cover"
          />
          <div
            data-aos="fade-left"
            className=" md:1/2 lg:w-1/2 h-1/2 md:ml-2 lg:ml-2 flex flex-col items-center"
          >
            <h3 className="text-blue-500 font-medium text-2xl">
              Manage multiple centres with one school account
            </h3>
            <ul>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p> Grant access to centre or regional managers</p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>
                  Assign teachers to grades, classrooms, schemes and centres
                </p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p>Transfer students from centre to another</p>
              </div>
              <div className="flex items-center mt-3 text-gray-500">
                <BiListCheck className="text-green-400 text-2xl font-medium" />
                <p> Assign students to schemes and classes with ease</p>
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
