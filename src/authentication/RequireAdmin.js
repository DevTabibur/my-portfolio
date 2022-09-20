import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import auth from '../Firebase/firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Loader from '../Pages/Shared/Loader/Loader';

const RequireAdmin = () => {
    const location = useLocation();
    const [admin] = useAdmin();
    const [user, loading] = useAuthState(auth)
    if(loading){
      return <Loader/>
    }

    console.log('requireAdmin admin', admin)

    if(!user){
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  return <Outlet/>
}

export default RequireAdmin