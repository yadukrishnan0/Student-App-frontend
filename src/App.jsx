import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/student/SignupPage";
import "./App.css";
import AdminSignup from "./pages/admin/Signup";
import StudentLogin from "./pages/student/StudentLogin";
import TableDetails from "./pages/admin/TableDetails";
import AdminHome from "./pages/admin/AdminHome";
import AddCourse from "./pages/admin/Addcourse";
import CourseList from "./pages/admin/coursesList";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./Layout/AdminLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/students" element={<TableDetails />} />
            <Route path="/admin/addcourse" element={<AddCourse />} />
            <Route path="/admin/courselist" element={<CourseList />} />
            <Route path="/admin/editcourse/:courseId" element={<AddCourse />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
