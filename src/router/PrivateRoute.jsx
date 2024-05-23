import React from "react";
import { Navigate , Route, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  return(
    // {!false ? <Navigate to="/login" /> : <Outlet />}
    <div>PrivateRoute</div>
  )
};

export default PrivateRoute;
