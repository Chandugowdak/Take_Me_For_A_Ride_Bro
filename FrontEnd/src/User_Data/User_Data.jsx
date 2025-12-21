import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserData.css";

const User_Data = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("JWT_Token");

        const res = await axios.get("http://localhost:3000/api/current/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.userData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="user-data-wrapper">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="user-card">

              <i className="bi bi-person-circle user-icon-big"></i>

              <h4 className="user-name">{user.name}</h4>
              <p className="user-email">{user.email}</p>

              <hr />

              <p className="user-info">
                <strong>User Type:</strong> {user.role}
              </p>
              <p className="user-info">
                <strong>Joined:</strong>{" "}
                {new Date(user.createdAt).toDateString()}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Data;
