import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/login.css"; // Import CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <h1>Login</h1>
        <Formik
          initialValues={{ username: "", password: "", rememberMe: false }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
            rememberMe: Yup.boolean().oneOf(
              [true],
              "You must accept the terms and conditions"
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="form-field">
                <label htmlFor="username" className="label">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  className={`input ${
                    !errors.username && touched.username ? "valid" : ""
                  } ${errors.username && touched.username ? "invalid" : ""}`}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-field">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className={`input ${
                    !errors.password && touched.password ? "valid" : ""
                  } ${errors.password && touched.password ? "invalid" : ""}`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-field checkbox-container">
                <label>
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="checkbox-input"
                  />
                  <span className="checkmark"></span>
                  Remember Me
                </label>
                <ErrorMessage
                  name="rememberMe"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="modal-buttons">
                <button
                  className="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <Link className="text-primary" to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <p className="sign-up">
                Create a new account? <Link to="/register">Sign Up</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
