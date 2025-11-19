import React,{useState,useContext} from "react";
import "../CssFolder/Login.css";
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import '../CssFolder/NavBar.css';
import axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';
import { GlobelValue } from "../context/GlobelVariable";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [Loading, setLoading] = useState(false);

const{Set_User_Login,setJWT_Token} = useContext(GlobelValue);

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const userData = { email, password };

  try {
    const response = await axios.post("http://localhost:3000/api/user/login", userData);

    // ✅ Success
    if (response.status === 200) {
      alert("Login Successful!");
      console.log("Login Response:", response.data.JWT_Token);
      //SET JWT TO LOCAL STORAGE
      localStorage.setItem("JWT_Token",response.data.JWT_Token);
      localStorage.setItem('Login_Status' , 'true');
      Set_User_Login(true);
      navigate("/home");
    } else {
      // ❌ Handle unexpected response codes (not common but safe)
      alert(response.data?.message || "Login Failed!");
      console.log("Unexpected response:", response.data);
    }
  } catch (err) {
    // 🔥 Detailed error handling
    if (err.response) {
      // Server responded with a status outside 2xx
      console.error("Server Error:", err.response.data);
      alert(err.response.data.message || "Invalid credentials!");
    } else if (err.request) {
      // Request was made but no response received
      console.error("No response from server:", err.request);
      alert("Server not responding. Please try again later.");
    } else {
      // Something else went wrong
      console.error("Error:", err.message);
      alert("An unexpected error occurred.");
    }
  } finally {
    // ✅ Always executed
    setLoading(false);
  }
};


  return (
    <><NavBar/>
    <div className="login-container">
      
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle"> <span className="nosifer-regular">Sign in to continue to Take Me For A Ride</span></p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="roboto-slab-uniquifier">Email : </Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={(e)=>setEmail(e.target.value)}
            required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
             <Form.Label className="roboto-slab-uniquifier">Password : </Form.Label>
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
