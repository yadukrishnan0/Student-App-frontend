import React from 'react'
import Signupform from '../../components/Signupform'
function Signupage() {
  const initialValues ={
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  }
  return (

   
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px] p-3">
          <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Create account</h1>
            </div>
            <Signupform initialValues={initialValues}/>
          </div>
            
        </div>
      </div>
    </>
  )
}

export default Signupage