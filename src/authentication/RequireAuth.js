import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import Loader from "../Pages/Shared/Loader/Loader";


const RequireAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  // showing the
  if (loading) {
    return <Loader />;
  }

  // it is necessary for rendering the element with loader
  //   if(loading){
  //     return <Loader/>
  //   }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
};

export default RequireAuth;
