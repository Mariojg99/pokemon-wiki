import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import  Home  from '../components/Home'
import MasterPokemon from '../components/MasterPokemon'

export const DashboardRoutes = () => {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/master-pokemon' element={<MasterPokemon />}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}
