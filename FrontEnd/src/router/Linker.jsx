import React from 'react';
import {Link} from 'react-router-dom';

const Linker = () => {
  return (
    <div>
        <Link to="/home"></Link>
        <Link to="/login"></Link>
        <Link to="register"></Link>
      
    </div>
  )
}

export default Linker
