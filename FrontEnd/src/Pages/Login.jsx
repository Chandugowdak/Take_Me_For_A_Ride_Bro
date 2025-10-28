import React,{useState} from "react";
import "../CssFolder/Login.css";
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import '../CssFolder/NavBar.css';
import axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';




export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [Loading, setLoading] = useState(false);

const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const UserData = {email:email ,password:password};
  try{
      const response = await axios.post("http://localhost:3000/api/user/login", UserData)
      if(response.status === 200){
        alert('Login Success');
        navigate('/home');
        setLoading(false);
      }else{
        alert('Login Failed Bro');
        console.log(respponse.data.message);
        setLoading(false);
      }
  }
  catch(err){
    console.error("Login failed:", err);
    setLoading(false);
    alert("Server Error Bro");
  }
    
}

  return (
    <><NavBar/>
    <div className="login-container">
      
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle"> <span className="nosifer-regular">Sign in to continue to Take Me For A Ride</span></p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="diplomata-regular">Email : </Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={(e)=>setEmail(e.target.value)}
            required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
             <Form.Label className="diplomata-regular">Password : </Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
          </Form.Group>

          <Button className="login-btn" type="submit" block>
            Login
          </Button>
        </Form>
        <div className="login-footer">
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
    </>
  );
}
