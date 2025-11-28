import React,{useContext} from 'react'
import NavBar from '../../Pages/NavBar';
import { GlobelValue } from '../../context/GlobelVariable';


const Earn_Home = () => {
  const{JWT_Token} = useContext(GlobelValue);
  return (
    <div>
       <NavBar/>
<p>{JWT_Token}</p>
      
    </div>
  )
}

export default Earn_Home;
