import React from "react";
import { Navigate , Route, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export const ProtectedRoute = ({children}) => {
  const {user} = useAuth();

  if(!user){
    return <Navigate to="/login" />;
  }

  return children;
};
