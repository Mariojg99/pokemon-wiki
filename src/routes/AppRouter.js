import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Autentication from '../components/Autentication';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AppRouter = () => {
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user?.uid){
             //console.log(user)
             setIsLoggedIn(true)
            }
            else{
             setIsLoggedIn(false)
            }
    
            setChecking(false)
        })
    
     
    }, [setIsLoggedIn,setChecking])

    if(checking){
        return(
            <div className='text-center my-5'>
                <img src='https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif' alt='cargando'/>
                <h1>Cargando...</h1>
            </div>
        )
      }

  return (
    <Router>
        <Routes>
            <Route path="/autentication" element={
                    <PublicRoutes isAuthenticated={isLoggedIn}>
                        <Autentication />
                    </PublicRoutes>
                } />

            <Route path="/*" element={
                  <PrivateRoutes isAuthenticated={isLoggedIn}>
                      <DashboardRoutes />
                  </PrivateRoutes>
              } />
        </Routes>
    </Router>
  )
}

export default AppRouter