import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from './pages/student/SignupPage';
import './App.css';
import AdminSignup from './pages/admin/Signup';
import Login from './pages/student/Login';
import TableDetails from './pages/admin/TableDetails';
import AdminHome from './pages/admin/AdminHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path='/admin/home' element={<AdminHome/>}/>
          <Route path='/admin/students' element={<TableDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
