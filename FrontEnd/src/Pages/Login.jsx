import React from "react";
import "../CssFolder/Login.css";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Sign in to continue to Take Me For A Ride</p>
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
  );
}
