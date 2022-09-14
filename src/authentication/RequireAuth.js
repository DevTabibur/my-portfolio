import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuthState } from 'react-firebase-hooks/auth';
// // import auth from "../firebase/firebase.init";
// import Loader from "../shared/Loader/Loader";

const RequireAuth = () => {
  const location = useLocation();
  const [user] = useState(false);
  // const user = false;

  // it is necessary for rendering the element with loader
//   if(loading){
//     return <Loader/>
//   }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;