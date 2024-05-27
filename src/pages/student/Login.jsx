import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px] p-3">
          <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Login</h1>
            </div>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Email"
              />

              <input
                type="password"
                name="password"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Password"
              />

              <button
                type="submit"
                className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
              >
                Login
              </button>

              <Link to="/login">
                <h1 className="text-blue-400">
                  Already have an account? Login
                </h1>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
