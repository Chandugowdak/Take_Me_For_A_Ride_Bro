import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobelValue } from "../context/GlobelVariable";
import "./CurrentUserProfile.css";

const CurrentUserProfile = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const navigate = useNavigate();
  const { Set_User_Login, setJWT_Token, setUser_Type } =
    useContext(GlobelValue);

  /* ================= FETCH CURRENT USER ================= */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("JWT_Token");
        if (!token) return;

        const res = await axios.get(
          "http://localhost:3000/api/current/user",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setUser(res.data.userData);
        setFormData({
          name: res.data.userData.name,
          email: res.data.userData.email
        });
      } catch (err) {
        console.error("User fetch error:", err);
      }
    };

    fetchUser();
  }, []);

  /* ================= BODY SCROLL LOCK ================= */
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  /* ================= LOGOUT ================= */
  const Handel_Logout = () => {
    localStorage.clear();
    setJWT_Token(null);
    Set_User_Login(false);
    setUser_Type(null);
    navigate("/");
  };

  /* ================= UPDATE ================= */
  const Handle_Update = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("JWT_Token");

      const res = await axios.patch(
        `http://localhost:3000/api/user/update/${user._id}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if(res.status === 200){
        alert("Profile updated successfully!");
      setUser(res.data.user);
      setShowModal(false);
      setShowProfile(false);
      }
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="position-relative">
      {/* USER ICON */}
      <div
        className="user-icon"
        onClick={() => setShowProfile(!showProfile)}
      >
        <i className="bi bi-person-circle fs-3"></i>
      </div>

      {/* PROFILE CARD */}
      {showProfile && user && (
        <div className="profile-card shadow">
          <div className="text-end">
            <i
              className="bi bi-x-lg close-btn"
              onClick={() => setShowProfile(false)}
            ></i>
          </div>

          <div className="text-center">
            <i className="bi bi-person-circle fs-1 text-primary"></i>
            <h6 className="fw-bold mt-2">{user.name}</h6>
            <p className="text-muted mb-1">{user.email}</p>
            <small>Role: {user.Type_of_User}</small>

            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-outline-primary w-50"
                onClick={() => setShowModal(true)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger w-50"
                onClick={Handel_Logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= UPDATE MODAL (CUSTOM) ================= */}
      {showModal && user && (
        <>
          <div
            className="custom-backdrop"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="custom-modal">
            <div className="modal-box">
              <h4 className="modal-title">Edit Profile</h4>

              <input
                className="form-control mb-3"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                className="form-control mb-3"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                className="form-control mb-2 bg-light"
                value={user.Type_of_User}
                disabled
              />
              <small className="text-muted">
                User role cannot be changed
              </small>

              <div className="d-flex justify-content-end gap-2 mt-4">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-primary"
                  disabled={loading}
                  onClick={Handle_Update}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentUserProfile;
