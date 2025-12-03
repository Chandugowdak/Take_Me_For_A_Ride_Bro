import React,{useState} from "react";
import "../CssFolder/Registration.css";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("User");



   const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();

 const userData = { name, email, password, Type_of_User: typeOfUser };


  try {
    const response = await axios.post("http://localhost:3000/api/user/register", userData);

    // ✅ Registration successful
    if (response.status === 201) {
      alert("Registration Successful!");
      navigate("/");
    } else {
      // ❌ Unexpected status (rare)
      alert(response.data?.message || "Registration Failed!");
      console.warn("Unexpected response:", response);
    }

  } catch (err) {
    // 🔥 Detailed error handling
    if (err.response) {
      // Server responded with an error (e.g., 400, 409)
      console.error("Server Error:", err.response.data);
      alert(err.response.data.message || "User already exists or invalid data!");
    } else if (err.request) {
      // Request was made, but no response
      console.error("No response from server:", err.request);
      alert("Server not responding. Please try again later.");
    } else {
      // Something else went wrong (e.g., wrong URL)
      console.error("Unexpected Error:", err.message);
      alert("Something went wrong. Please try again.");
    }
  }
}

  return (
    <>
    
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle"><span className="nosifer-regular">Join Us  and rent Vehicels easily!</span></p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
             <Form.Label className="roboto-slab-uniquifier">Full Name : </Form.Label>
            <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
             <Form.Label className="roboto-slab-uniquifier">Email : </Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="roboto-slab-uniquifier">Password : </Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  required/>
          </Form.Group>

       <Form.Group className="mb-3">
  <Form.Label className="roboto-slab-uniquifier">Register As :</Form.Label>
  <Form.Select onChange={(e) => setTypeOfUser(e.target.value)} required>
    <option value="User">User</option>
    <option value="Earner">Earner</option>
  </Form.Select>
</Form.Group>


          <Button className="register-btn" type="submit" >
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




