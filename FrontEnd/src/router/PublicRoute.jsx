import { useContext } from "react";
import { GlobelValue } from "../context/GlobelVariable";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
  const { JWT_Token , User_Type} = useContext(GlobelValue);



  // If user is already logged in → redirect based on user type
  if (JWT_Token) {
    if (User_Type === "User") {
      return <Navigate to="/Userhome" replace />;
    } else if (User_Type === "Earner") {
      return <Navigate to="/Earnerhome" replace />;
    }
  }

  // If NOT logged in → allow Login/Register pages
  return <Outlet />;
};

export default PublicRoute;

// import { useContext } from "react";
// import { GlobelValue } from "../context/GlobelVariable";
// import { Outlet, Navigate } from "react-router-dom";

// const PublicRoute = () => {
//   const { JWT_Token } = useContext(GlobelValue);

//   // If user is already logged in → redirect to home
//   if (JWT_Token) {
//     return <Navigate to="/home" replace />;
//   }

//   // If NOT logged in → allow Login/Register pages
//   return <Outlet />;
// };

// export default PublicRoute;