import React, { useState } from "react";
import "../CssFolder/Registration.css";
import { Form, Button, InputGroup } from "react-bootstrap";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaCarSide,
} from "react-icons/fa";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Type_of_User, setType_of_User] = useState("User");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      Type_of_User,
      phone,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        userData,
      );

      if (response.status === 201) {
        toast.success("Registration Successful!");
        navigate("/");
      } else if (response.message === "Invalid phone number") {
        toast.error("Invalid phone number. Please enter valid 10 digits.");
      } else {
        toast.error(response.data?.message || "Registration Failed!");
      }
    } catch (err) {
      if (err.response) {
        toast.error(
          err.response.data.message || "User already exists or invalid data!",
        );
      } else if (err.request) {
        toast.error("Server not responding. Please try again later.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-icon">
          <FaCarSide />
        </div>

        <h2 className="register-title">Create Account</h2>

        <p className="register-subtitle">
          Join us and start your rental journey
        </p>

        <Form onSubmit={handleSubmit}>
          {/* NAME */}

          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>

            <InputGroup>
              <InputGroup.Text className="input-icon">
                <FaUser />
              </InputGroup.Text>

              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          {/* EMAIL */}

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>

            <InputGroup>
              <InputGroup.Text className="input-icon">
                <FaEnvelope />
              </InputGroup.Text>

              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          {/* PASSWORD */}

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>

            <InputGroup>
              <InputGroup.Text className="input-icon">
                <FaLock />
              </InputGroup.Text>

              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          {/* PHONE */}

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>

            <InputGroup>
              <InputGroup.Text className="input-icon">
                <FaPhoneAlt />
              </InputGroup.Text>

              <Form.Control
                type="text"
                placeholder="Enter 10-digit number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          {/* SELECT */}

          <Form.Group className="mb-4">
            <Form.Label>Register As</Form.Label>

            <Form.Select
              className="custom-select"
              onChange={(e) => setType_of_User(e.target.value)}
              required
            >
              <option value="User">User</option>

              <option value="Earner">Earner</option>
              {/* <option value="admin">admin</option> */}
            </Form.Select>
          </Form.Group>

          <Button className="register-btn" type="submit">
            Create Account
          </Button>
        </Form>

        <div className="register-footer">
          <span>Already have an account?</span>

          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}
