import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import  Home  from '../components/Home'

export const DashboardRoutes = () => {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}
