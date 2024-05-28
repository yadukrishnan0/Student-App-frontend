import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Header from "../../components/Headers";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../../instance/axiosInstance";

function CourseList() {
  const [courseData, setCourseData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/admin/courselist");
      const { data, status } = response;
      setCourseData(data?.courseData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  //delete course
  const deleteCourse = async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/admin/deleteCourse?courseId=${id}`
      );
      if (response.status == 200) {
        setCourseData(courseData.filter((cource) => cource._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-900 text-[#3c9b9b]">
            <th className="px-4 py-2">Coursename</th>
            <th className="px-4 py-2">fee</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Teachers</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {courseData.map((course) => (
            <tr key={course._id} className="text-center">
              <td className="border border-gray-800 px-4 py-2">
                {course.Coursename}
              </td>
              <td className="border border-gray-800 px-4 py-2">{course.fee}</td>
              <td className="border border-gray-800 px-4 py-2">
                {course.Description}
              </td>
              <td className="border border-gray-800 px-4 py-2">
                {course.teachername}
              </td>
              <td className="border border-gray-800 px-4 py-2">
                <button
                  onClick={() => Navigate(`/admin/editcourse/${course._id}`)}
                  className="text-yellow-500 hover:text-yellow-700 mx-2 text-xl"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => {
                    deleteCourse(course._id);
                  }}
                  className="text-red-500 hover:text-red-700 mx-2 text-xl"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CourseList;
