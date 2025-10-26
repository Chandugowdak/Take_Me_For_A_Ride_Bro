import React from "react";
import "../CssFolder/Login.css";
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import '../CssFolder/NavBar.css';

export default function Login() {
  return (
    <><NavBar/>
    <div className="login-container">
      
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle"> <span className="nosifer-regular">Sign in to continue to Take Me For A Ride</span></p>
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="diplomata-regular">Email : </Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
             <Form.Label className="diplomata-regular">Password : </Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button className="login-btn" type="submit" block>
            Login
          </Button>
        </Form>
        <div className="login-footer">
          <span>Don't have an account? </span>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
    </>
  );
}
