import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "../component/css/registration.css";
import signUpSchema from "../validationSchema/schema";

const Register = () => {
  return (
    <div className="signup-container">
      <div className="signupform-container">
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={signUpSchema}
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
                <label htmlFor="email" className="label">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className={`input ${
                    !errors.email && touched.email ? "valid" : ""
                  } ${errors.email && touched.email ? "invalid" : ""}`}
                />
                <ErrorMessage
                  name="email"
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
              <div className="form-field">
                <label htmlFor="confirm_password" className="label">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirm_password"
                  className={`input ${
                    !errors.confirm_password && touched.confirm_password
                      ? "valid"
                      : ""
                  } ${
                    errors.confirm_password && touched.confirm_password
                      ? "invalid"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="confirm_password"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="modal-buttons text-center p-2">
                <button
                  className="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </div>
              <p className="text-center p-2">
                <h4>
                  Already have an account? <Link to="/login">Log In</Link>
                </h4>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
