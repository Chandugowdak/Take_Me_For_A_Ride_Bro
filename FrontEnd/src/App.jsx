import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Registration';
import Home from './components/Home';
import GlobelContext from './context/GlobelContext';


function App() {
  return (
     <GlobelContext>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </GlobelContext>
     
 
  );
}

export default App;
