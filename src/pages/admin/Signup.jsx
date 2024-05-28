import React from "react";
import Signupform from "../../components/Signupform";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AdminSignup() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handlesubmit = async (values) => {
    const datas = values;
    try{

    
    const response = await axios.post(
      "http://localhost:3000/admin/signup",
      datas
    );
    const data = response.data;
    if (data.success == true) {
      navigate("/admin/login");
    }
  }catch(err){
    console.log(err)
  }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px] p-3">
          <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Create Admin</h1>
            </div>
            <Signupform
              initialValues={initialValues}
              handlesubmit={handlesubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSignup;
