import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import  Home  from '../components/Home'
// import PokemonDetail from '../components/PokemonDetail'

export const DashboardRoutes = () => {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/pokemon/:id' element={<PokemonDetail />}/> */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}
