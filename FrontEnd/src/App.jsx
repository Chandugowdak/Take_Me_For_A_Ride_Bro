import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout_Section/Layout';
import Login from './Pages/Login';
import Register from './Pages/Registration';
import User_Home from './components/UserHome/User_Home';
import Earn_Home from './components/EarnerHome/Earn_Home';

import GlobelContext from './context/GlobelContext';

// // Import Routes
import PublicRoute from './router/PublicRoute';
import ProtectedRoute from './router/ProtectedRoute';

const  App = ()=>{
  return (
    <GlobelContext>
      <Routes>
        {/* IMPLEMENT OUT LET SO IT WILL BW BE PARENT ROUTE */}
    <Route  element={<Layout/>}>
   {/* CHILD ROUTE FOR THE OUTLET */}
        {/* PUBLIC ROUTES */}
        <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path="/Userhome" element={<User_Home />} />
          <Route path="/Earnerhome" element={<Earn_Home  />} />
        </Route>

</Route>

      </Routes>
    </GlobelContext>
  );
}

export default App;



