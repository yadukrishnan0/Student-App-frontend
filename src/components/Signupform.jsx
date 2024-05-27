
import React from "react";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { validationSchema } from "../utilities/Validation";



const SignupForm = ({ initialValues,handlesubmit}) => {
    return (
        <Formik
            initialValues={ initialValues}
            validationSchema={validationSchema}
            onSubmit={handlesubmit}
        >
            {({ isSubmitting ,errors,touched,setFieldValue}) => (
                <Form className="flex flex-col gap-2">
                    <Field
                        type="text"
                        name="name"
                        className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                        placeholder="Name"
                    />
                   {touched.name&& errors.name && (
                    <small className="text-red-400">{errors.name}</small>
                  )}

                    <Field
                        type="email"
                        name="email"
                        className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                        placeholder="Email"
                    />
                    {touched.email&& errors.email && (
                    <small className="text-red-400">{errors.email}</small>
                  )}

                    <Field
                        type="password"
                        name="password"
                        className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                        placeholder="Password"
                    />
                     {touched.password&& errors.password && (
                    <small className="text-red-400">{errors.password}</small>
                  )}

                    <Field
                        type="password"
                        name="confirmPassword"
                        className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                        placeholder="Confirm Password"
                    />
                 {touched.confirmPassword&& errors. confirmPassword&& (
                    <small className="text-red-400">{errors. confirmPassword}</small>
                  )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
                    >
                        Create Account
                    </button>

                    <Link to="/login">
                        <h1 className="text-blue-400">Already have an account? Login</h1>
                    </Link>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;
