import React,{useContext} from 'react';
import NavBar from  './NavBar';
import Earn_Nav from './Earn_Nav';
import User_Nav from './User_Nav';
import {Outlet} from 'react-router-dom';
import { GlobelValue } from '../context/GlobelVariable';
import Footer from '../Footer_Section/Footer';

const Layout= ()=>{
 const {User_Type} = useContext(GlobelValue);
    return (
        <div>
            {User_Type === "Earner" && <Earn_Nav/>}
            {User_Type === "User" && <User_Nav/>}
            {User_Type === null && <NavBar/>}
     <Outlet/>
     <Footer/>
        </div>
    )
}
export default  Layout;