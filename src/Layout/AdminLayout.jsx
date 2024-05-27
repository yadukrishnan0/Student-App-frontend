import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Headers'
function  AdminLayout() {
  return (
   <>
     <Header/>
     <Outlet/>
   </>
  )
}

export default AdminLayout;