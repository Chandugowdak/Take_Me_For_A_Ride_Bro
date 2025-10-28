import React,{useState} from "react";
import "../CssFolder/Registration.css";
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const navigate = useNavigate();
   const handelrSubmit = async (e) => {
    e.preventDefault();
    const UserData = {name:name, email:email ,password:password};
    try{
        const response = await axios.post("http://localhost:3000/api/user/register", UserData)
        if(response.status === 201){
          alert('Registration Success');
          navigate('/');
        }else{
          alert('Registration Failed Bro');
          console.log(response.data.message);
        }
      }
      catch(err){
        console.error("Registration failed:", err);
        alert("Server Error Bro");
      }

    }
  return (
    <>
    <NavBar/>
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle"><span className="nosifer-regular">Join Us  and rent Vehicels easily!</span></p>
        <Form onSubmit={handelrSubmit}>
          <Form.Group className="mb-3" controlId="formName">
             <Form.Label className="diplomata-regular">Full Name : </Form.Label>
            <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
             <Form.Label className="diplomata-regular">Email : </Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="diplomata-regular">Password : </Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  required/>
          </Form.Group>

       

          <Button className="register-btn" type="submit" block>
            Register
          </Button>
        </Form>
        <div className="register-footer">
          <span>Already have an account? </span>
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
    </>
  );
}




