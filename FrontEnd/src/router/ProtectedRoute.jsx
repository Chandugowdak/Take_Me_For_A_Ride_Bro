import { useContext } from "react";
import { GlobelValue } from "../context/GlobelVariable";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { JWT_Token ,User_Type} = useContext(GlobelValue);
  
  const location = useLocation();

  // Not logged in → redirect to login
  if (!JWT_Token) {
    return <Navigate to="/" replace />;
  }

  // Prevent User from opening Earner pages
  if (location.pathname.startsWith("/Earnerhome") &&  User_Type !== "Earner") {
    return <Navigate to="/Userhome" replace />;
  }

  // Prevent Earner from opening User pages
  if (location.pathname.startsWith("/Userhome") && User_Type !== "User") {
    return <Navigate to="/Earnerhome" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

// import { useContext } from "react";
// import { GlobelValue } from "../context/GlobelVariable";
// import { Outlet, Navigate } from "react-router-dom";

// const ProtectedRoute = () => {
//   const { JWT_Token } = useContext(GlobelValue);

//   // If NOT logged in → redirect to login
//   if (!JWT_Token) {
//     return <Navigate to="/" replace />
//   }

//   // If logged in → allow access
//   return <Outlet />;
// };

// export default ProtectedRoute;


