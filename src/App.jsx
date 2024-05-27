import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signupage from './pages/student/SignupPage';
import './App.css'
import AdminSignup from './pages/admin/Signup';

function App() {


  return (
    <>
    
    <BrowserRouter>

<Routes>

  <Route path="/signup" element={<  Signupage />} />
  
  <Route path="/admin/signup" element={<AdminSignup/>} />
</Routes>



</BrowserRouter>
  
    </>
  )
}

export default App
