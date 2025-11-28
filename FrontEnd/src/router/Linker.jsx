import React from 'react';
import {Link} from 'react-router-dom';

const Linker = () => {
  return (
    <div>
        <Link to="/Userhome"></Link>
        <Link to="/Earnerhome"></Link>
        <Link to="/login"></Link>
        <Link to="register"></Link>
      
    </div>
  )
}

export default Linker
