import React, {useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Header from "../../components/Headers";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../../instance/axiosInstance";
function  CourseList() {
const[studentsData,setStudentsData]=useState([])

useEffect(()=>{
  fetchData()
},[])

const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/admin/students');
    const { data, status } = response;
    setStudentsData(data.studentsDetails)
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
          {studentsData.map((student) => (
            <tr key={student._id} className="text-center">
              <td className="border border-gray-800 px-4 py-2">{student.name}</td>
              <td className="border border-gray-800 px-4 py-2">{student.email}</td>
              <td className="border border-gray-800 px-4 py-2">{student.name}</td>
              <td className="border border-gray-800 px-4 py-2">{student.email}</td>
              <td className="border border-gray-800 px-4 py-2">
                <Link to={`/editstudent/${student._id}`}>
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
