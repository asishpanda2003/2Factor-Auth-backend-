import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const ProtectedRoute = () => {
  // const isLoggedIn = false;
  const { isLoggedIn,loading } = useSession();
  console.log("The login user is ",isLoggedIn);
  if(loading){
    return <div>loading ...</div>
  }
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
