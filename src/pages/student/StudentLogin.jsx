import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../components/Login";
import { MdEmail } from "react-icons/md";
import axiosInstance from "../../../instance/axiosInstance";
function StudentLogin() {
  const Navigate = useNavigate();
  const intialValues = {
    email: "",
    password: "",
  };
  const handleSumbit = async (values) => {
    const datas = values;

    const response = await axiosInstance.post("/studentlogin", datas);
    const { data, status } = response;

    if (status == 200) {
      localStorage.setItem("jwt", data.token);
      Navigate("/home");
    }
  };
  return (
    <>
      <Login intialValues={intialValues} handleSumbit={handleSumbit} />
    </>
  );
}

export default StudentLogin;
