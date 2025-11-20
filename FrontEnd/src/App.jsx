import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Registration';
import Home from './components/Home';

import GlobelContext from './context/GlobelContext';

// Import Routes
import PublicRoute from './router/PublicRoute';
import ProtectedRoute from './router/ProtectedRoute';

const  App = ()=>{
  return (
    <GlobelContext>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

      </Routes>
    </GlobelContext>
  );
}

export default App;
