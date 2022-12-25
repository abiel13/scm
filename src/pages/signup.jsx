import React from "react";
import logo from "../images/SMP.svg";
import { SignSchema } from "../Validations/SignVal";
import { useFormik } from "formik";

function Signup() {
  const onSubmit = () => {
    console.log("submitted");
  };

  const { handleChange, errors, handleBlur, handleSubmit, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: " ",
        password: "",
        cpassword: "",
      },
      validationSchema: SignSchema,
      onSubmit,
    });

  console.log(errors);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-11/12 h-4/5 shadow-xl flex">
        <div className="h-full w-full md:w-1/2 lg:w-1/2 py-2 px-3  flex relative flex-col items-center">
          <img
            src={logo}
            alt=""
            className="w-3/5 md:w-3/12 md:self-start lg:w-3/12 lg:self-start"
          />
          <form
            onSubmit={handleSubmit}
            className="px-3 py-2 w-3/4 mt-6 h-5/6 relative md:absolute lg:absolute bottom-4 bg-white flex flex-col items-center"
            action=""
          >
            <div className=" w-3/4 md:1/2 lg:w-1/2 leading-4 text-center">
              <h2 className="font-medium text-xl">Sign Up For SMP Today</h2>
            </div>
            <div className="h-full flex-col flex px-3 w-full  justify-center md:w-3/4 lg:w-3/4 mt-9">
              <label className="flex flex-col items-start" htmlFor="">
                <p>Email</p>
                <input
                  id="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  className={`${
                    errors.email && touched.email
                      ? "border-red-400"
                      : "border-blue-400"
                  } border-b   px-1 py-1  outline-none text-sm w-full rounded-br-md`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </label>
              <label className="flex flex-col items-start mt-5" htmlFor="">
                <p>Password</p>
                <input
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  className={`${
                    errors.password && touched.password
                      ? "border-red-400"
                      : "border-blue-400"
                  } border-b   px-1 py-1  outline-none text-sm w-full rounded-br-md`}
                />
                {errors.password && touched.password &&  <p className="text-red-500 text-sm">{errors.password}</p>}
              </label>
              <label className="flex flex-col items-start mt-5" htmlFor="">
                <p>Confirm Password</p>
                <input
                  id="cpassword"
                  type="password"
                  value={values.cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.cpassword && touched.cpassword
                      ? "border-red-400"
                      : "border-blue-400"
                  } border-b   px-1 py-1  outline-none text-sm w-full rounded-br-md`}
                />
                {errors.cpassword && touched.cpassword &&  <p className="text-red-500 text-sm">{errors.cpassword}</p>}
              </label>
              <label className="flex flex-col items-start mt-5" htmlFor="">
                <p>Name Of School</p>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.name && touched.name
                      ? "border-red-400"
                      : "border-blue-400"
                  } border-b   px-1 py-1  outline-none text-sm w-full rounded-br-md`}
                />
                {errors.name && touched.name &&  <p className="text-red-500 text-sm">{errors.name}</p>}
              </label>
              <button
                type="submit"
                className="bg-blue-400 px-3 self-center py-2 w-1/2 rounded-md text-white font-medium mt-4"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:w-1/2 md:flex lg:w-1/2 h-full signup flex-col lg:flex items-center justify-center ">
          <h3 className="text-white font-bold text-center text-4xl ">
            Create An Account With Us
          </h3>
          <p className="text-white text-center">
            Your reliable management program
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
