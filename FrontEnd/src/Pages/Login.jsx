import React, { useState, useContext } from "react";
import "../CssFolder/Login.css";
import { Form, Button } from "react-bootstrap";
import "../CssFolder/NavBar.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { GlobelValue } from "../context/GlobelVariable";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);

  const { Set_User_Login, setJWT_Token, setUser_Type } = useContext(GlobelValue);

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
        alert("Login Successful!");

        const token = response.data.JWT_Token;
        const user = response.data.user;

        const userType = user.Type_of_User;
        const phone = user.phone; // ✅ NEW FIELD

        // ✅ Store in localStorage
        localStorage.setItem("JWT_Token", token);
        localStorage.setItem("Login_Status", "true");
        localStorage.setItem("User_Type", userType);
        // localStorage.setItem("User_Phone", phone); // ✅ STORE PHONE

        // ✅ Set axios default header (VERY IMPORTANT)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // ✅ Update context
        setJWT_Token(token);
        Set_User_Login(true);
        setUser_Type(userType);

        // ✅ Redirect based on user type
        if (userType === "User") {
          navigate("/Userhome");
        } else if (userType === "Earner") {
          navigate("/Earnerhome");
        } else {
          navigate("/");
        }
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back!</h2>
          <p className="login-subtitle">
            <span className="nosifer-regular">
              Sign in to continue to Take Me For A Ride
            </span>
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="roboto-slab-uniquifier">
                Email :
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="roboto-slab-uniquifier">
                Password :
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              className="login-btn"
              type="submit"
              disabled={Loading}
            >
              {Loading ? "Logging in..." : "Login"}
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