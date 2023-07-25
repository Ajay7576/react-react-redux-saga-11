import React from "react";
import "./css/login.css";
import { GlobalStyle } from "./GlobalStyles";
import { useFormik } from "formik";
import  signupSchema from "../validationSchema/schema";
import myspace from "./images/tom-gainor-Ab58uXOtIWA-unsplash (1).jpg";
import { Link } from "react-router-dom";


const Login = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <>
      <GlobalStyle />
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To My Space 
                </p>
                <form onSubmit={handleSubmit}>
        
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      UserName Or Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>


                  <div className="modal-buttons">
                  
                    <button className="input-button" type="submit">
                      Submit
                    </button>

                    <Link to="/navbar" className="">
                      Forgot Password ?
                    </Link>
                  </div>
                </form>
                <p className="sign-up">
                  Create a new  account? <Link to="/register"> Sign Up </Link>
                </p>
              </div>
              <div className="modal-right">
                <img
                //   src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                src={myspace}
                alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Login;