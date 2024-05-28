import React from "react";
import Header from "../../components/Headers";
import { addcourseSchema } from "../../utilities/Validation";
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components and ErrorMessage
import axiosInstance from "../../../instance/axiosInstance";

function Addcourse() {
  const initialValues = {
    Coursename: '',
    fee: '',
    Description: '',
    teachername: ''
  };

  const handlesubmit =async (values) => {
    const data = values
    const response =await axiosInstance.post('/admin/addcourse', data)
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex shadow-md h-[500px] p-3">
          <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Add course</h1>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={addcourseSchema}
              onSubmit={handlesubmit}
            >
              {({ isSubmitting, errors, touched }) => ( // Destructure props correctly
                <Form className="flex flex-col gap-2">
                  <Field
                    type="text"
                    name="Coursename"
                    className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                    placeholder="Coursename"
                  />
                  <ErrorMessage name="Coursename" component="small" className="text-red-400" />
                  
                  <Field
                    type="text"
                    name="fee"
                    className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                    placeholder="fee"
                  />
                  <ErrorMessage name="fee" component="small" className="text-red-400" />

                  <Field
                    type="text"
                    name="Description"
                    className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                    placeholder="Description"
                  />
                  <ErrorMessage name="Description" component="small" className="text-red-400" />

                  <Field
                    type="text"
                    name="teachername"
                    className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                    placeholder="Teachername"
                  />
                  <ErrorMessage name="teachername" component="small" className="text-red-400" />

                  <button
                    type="submit"
                    className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
                    disabled={isSubmitting} 
                  >
                    Add course
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addcourse;
