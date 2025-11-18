import React,{useState,useEffect} from 'react';
import { GlobelValue } from './GlobelVariable';

const GlobelContext = ({children}) => {
    const [JWT_Token , setJWT_Token] = useState(null);
    const[User_Login ,Set_User_Login] = useState(false);

    const Handel_JWT_TOKEN = async()=>{
     setJWT_Token(localStorage.getItem("JWT_Token"));
    }

    useEffect(()=>{
        Handel_JWT_TOKEN();
    },[]);
  return (
    <div>
        <GlobelValue.Provider value={{JWT_Token , setJWT_Token,User_Login,Set_User_Login}}>
            {children}
        </GlobelValue.Provider>
      
    </div>
  )
}

export default GlobelContext
