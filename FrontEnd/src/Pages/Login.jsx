import React, { useState, useContext } from "react";
import "../PagesCSS/Login.css";
import { Form, Button, InputGroup } from "react-bootstrap";
import "../PagesCSS/NavBar.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { GlobelValue } from "../context/GlobelVariable";
import { toast } from "react-toastify";

import {
  FaEnvelope,
  FaLock,
  FaCarSide,
} from "react-icons/fa";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);

  const {
    Set_User_Login,
    setJWT_Token,
    setUser_Type,
  } = useContext(GlobelValue);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {

        toast.success("Login Successful!");

        const token = response.data.JWT_Token;
        const user = response.data.user;

        const userType = user.Type_of_User;

        localStorage.setItem("JWT_Token", token);
        localStorage.setItem("Login_Status", "true");
        localStorage.setItem("User_Type", userType);

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;

        setJWT_Token(token);
        Set_User_Login(true);
        setUser_Type(userType);

        if (userType === "User") {
          navigate("/Userhome");
        }
        else if (userType === "Earner") {
          navigate("/Earnerhome");
        }
        else if( userType === 'admin')
        {
          navigate('/Adminhome');
        }
        else {
          navigate("/");
        }
      }

    }
    catch (err) {

      toast.error(
        err.response?.data?.message || "Login failed"
      );

    }
    finally {
      setLoading(false);
    }
  };

  return (

    <div className="tmfr-login__container">

      <div className="tmfr-login__card">

        <div className="tmfr-login__icon">
          <FaCarSide />
        </div>

        <h2 className="tmfr-login__title">
          Welcome Back
        </h2>

        <p className="tmfr-login__subtitle">
          Sign in to continue your ride journey
        </p>

        <Form onSubmit={handleSubmit}>

          <Form.Group
            className="mb-4"
          >

            <Form.Label
              className="tmfr-login__label"
            >
              Email Address
            </Form.Label>

            <InputGroup>

              <InputGroup.Text
                className="tmfr-login__input-icon"
              >
                <FaEnvelope />
              </InputGroup.Text>

              <Form.Control
                className="tmfr-login__input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </InputGroup>

          </Form.Group>

          <Form.Group
            className="mb-4"
          >

            <Form.Label
              className="tmfr-login__label"
            >
              Password
            </Form.Label>

            <InputGroup>

              <InputGroup.Text
                className="tmfr-login__input-icon"
              >
                <FaLock />
              </InputGroup.Text>

              <Form.Control
                className="tmfr-login__input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </InputGroup>

          </Form.Group>

          <Button
            className="tmfr-login__button"
            type="submit"
            disabled={Loading}
          >
            {
              Loading
                ? "Logging in..."
                : "Login"
            }
          </Button>

        </Form>

        <div className="tmfr-login__footer">

          <span>
            Don't have an account?
          </span>

          <Link to="/register">
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}