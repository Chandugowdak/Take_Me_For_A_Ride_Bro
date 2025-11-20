import { useContext } from "react";
import { GlobelValue } from "../context/GlobelVariable";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { JWT_Token } = useContext(GlobelValue);

  // If NOT logged in → redirect to login
  if (!JWT_Token) {
    return <Navigate to="/" replace />
  }

  // If logged in → allow access
  return <Outlet />;
};

export default ProtectedRoute;
