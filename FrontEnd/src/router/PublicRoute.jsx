import { useContext } from "react";
import { GlobelValue } from "../context/GlobelVariable";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
  const { JWT_Token } = useContext(GlobelValue);

  // If user is already logged in → redirect to home
  if (JWT_Token) {
    return <Navigate to="/home" replace />;
  }

  // If NOT logged in → allow Login/Register pages
  return <Outlet />;
};

export default PublicRoute;
