import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Header from "../../components/Headers";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../../instance/axiosInstance";
function TableDetails() {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/admin/students");
      const { data, status } = response;
      setStudentsData(data.studentsDetails);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-900 text-[#3c9b9b]">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr key={student._id} className="text-center">
              <td className="border border-gray-800 px-4 py-2">
                {student.name}
              </td>
              <td className="border border-gray-800 px-4 py-2">
                {student.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableDetails;
