import React from "react";
import "../CssFolder/Registration.css";
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";

export default function Register() {
  return (
    <>
    <NavBar/>
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle"><span className="nosifer-regular">Join Us  and rent Vehicels easily!</span></p>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
             <Form.Label className="diplomata-regular">Full Name : </Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
             <Form.Label className="diplomata-regular">Email : </Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="diplomata-regular">Password : </Form.Label>
            <Form.Control type="password" placeholder="Password"  required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
           <Form.Label className="diplomata-regular">Confirm Password :  </Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" required />
          </Form.Group>

          <Button className="register-btn" type="submit" block>
            Register
          </Button>
        </Form>
        <div className="register-footer">
          <span>Already have an account? </span>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
    </>
  );
}
