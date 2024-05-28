import React, { useEffect, useState } from "react";
import Header from "../../components/Headers";
import { addcourseSchema } from "../../utilities/Validation";
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik components and ErrorMessage
import axiosInstance from "../../../instance/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
function Addcourse() {
  const navigate = useNavigate();
  const [courseDetails, setCourseDetails] = useState({
    Coursename: "",
    fee: "",
    Description: "",
    teachername: "",
  });
  const { courseId } = useParams();
  useEffect(() => {
    if (courseId) {
      const editCourse = async () => {
        const response = await axiosInstance.get(
          `/admin/editcourse?courseId=${courseId}`
        );
        const { data, status } = response;
        const courseData = data.courseData;
        setCourseDetails(courseData);
      };
      editCourse();
    }
  }, []);

  const handlesubmit = async (values) => {
    const datas = values;
    
   if(!courseId){
    const response = await axiosInstance.post("/admin/addcourse", datas);
    const { data } = response;
    if (data.success === true) {
      navigate("/admin/courselist");
    }
  }else{
    const response = await axiosInstance.put(`/admin/editcourse?courseId=${courseId}`, datas);
    const { data } = response;
    if (data.success === true) {
      navigate("/admin/courselist");
    }
  }
   }

  return (
    <>
     
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex shadow-md h-[500px] p-3">
          <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Add course</h1>
            </div>
            <Formik
              initialValues={courseDetails}
              enableReinitialize={true}
              validationSchema={addcourseSchema}
              onSubmit={handlesubmit}
            >
              {(
                { isSubmitting, errors, touched } // Destructure props correctly
              ) => (
                <Form className="flex flex-col gap-2">
                  <Field
                    type="text"
                    name="Coursename"
                    className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                    placeholder="Coursename"
                  />
                  <ErrorMessage
                    name="Coursename"
                    component="small"
                    className="text-red-400"
                  />

                  <Field
                    type="text"
                    name="fee"
                    className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                    placeholder="fee"
                  />
                  <ErrorMessage
                    name="fee"
                    component="small"
                    className="text-red-400"
                  />

                  <Field
                    type="text"
                    name="Description"
                    className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                    placeholder="Description"
                  />
                  <ErrorMessage
                    name="Description"
                    component="small"
                    className="text-red-400"
                  />

                  <Field
                    type="text"
                    name="teachername"
                    className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                    placeholder="Teachername"
                  />
                  <ErrorMessage
                    name="teachername"
                    component="small"
                    className="text-red-400"
                  />

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
