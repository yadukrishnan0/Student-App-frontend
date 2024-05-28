import React, {useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Header from "../../components/Headers";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../../instance/axiosInstance";

function  CourseList() {
const[courseData,setCourseData]=useState([])

useEffect(()=>{
  fetchData()
},[])

const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/admin/courselist');
    const { data, status } = response;
    setCourseData(data?.courseData)
    console.log(data)
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
<Header/>
<table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-900 text-[#3c9b9b]">
            <th className="px-4 py-2">Coursename</th>
            <th className="px-4 py-2">fee</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">teachername</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {courseData.map((course) => (
            <tr key={course._id} className="text-center">
              <td className="border border-gray-800 px-4 py-2">{course.Coursename}</td>
              <td className="border border-gray-800 px-4 py-2">{course.fee}</td>
              <td className="border border-gray-800 px-4 py-2">{course.Description}</td>
              <td className="border border-gray-800 px-4 py-2">{course.teachername}</td>
              <td className="border border-gray-800 px-4 py-2">
                <Link to={`/admin/editcourse/${course._id}`}>
                  <button className="text-yellow-500 hover:text-yellow-700 mx-2 text-xl">
                    <FaEdit />
                  </button>
                </Link>
                <button className="text-red-500 hover:text-red-700 mx-2 text-xl">
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

export default  CourseList;
