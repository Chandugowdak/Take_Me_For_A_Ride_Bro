import React,{useContext} from 'react'
import NavBar from '../../Pages/NavBar';
import { GlobelValue } from '../../context/GlobelVariable';


const User_Home = () => {
  const{JWT_Token} = useContext(GlobelValue);
  return (
    <div>
       <NavBar/>
<p>{JWT_Token}</p>
<p>User Home</p>
      
    </div>
  )
}

export default User_Home;
