import React,{useState,useEffect} from 'react';
import { GlobelValue } from './GlobelVariable';

const GlobelContext = ({children}) => {
    const [JWT_Token , setJWT_Token] = useState(null);
    const[User_Login ,Set_User_Login] = useState(false);
    const[User_Type , setUser_Type] = useState(null);

    const Handel_JWT_TOKEN = async()=>{
     setJWT_Token(localStorage.getItem("JWT_Token")); //GET THE JWT TOKEN FROM LOCAL STORAGE
     setUser_Type(localStorage.getItem('User_Type')); //GET THE TYPE OF USER FROM LICAL STORAGE
     Set_User_Login(localStorage.getItem("Login_Status") === 'true'); //GET THE LOGIN STATUS FROM LOCAL STORAGE
    }

    useEffect(()=>{
        Handel_JWT_TOKEN();
    },[]);
  return (
    <div>
        <GlobelValue.Provider value={{JWT_Token , setJWT_Token,User_Login,Set_User_Login, User_Type,setUser_Type}}>
            {children}
        </GlobelValue.Provider>
      
    </div>
  )
}

export default GlobelContext
