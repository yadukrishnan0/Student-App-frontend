import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signupage from './pages/student/SignupPage';
import './App.css'

function App() {


  return (
    <>
    
    <BrowserRouter>

<Routes>

  <Route path="/signup" element={<  Signupage />} />
</Routes>



</BrowserRouter>
  
    </>
  )
}

export default App
