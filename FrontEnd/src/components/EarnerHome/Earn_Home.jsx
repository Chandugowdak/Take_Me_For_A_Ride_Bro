import React, { useContext, useState } from "react";
import { GlobelValue } from "../../context/GlobelVariable";
import axios from "axios";
import "./Earn_Home.css";
import TopCities from "../../Footer_Section/TopCities";

const Earn_Home = () => {
  const { JWT_Token } = useContext(GlobelValue);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    Vehical_Name: "",
    Type_of_Vehical: "Bike",
    Image_URL: "",
    Rentel_Date: "",
    Return_Date: "",
    Total_Amount: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/add/vehical", form, {
        headers: { Authorization: `Bearer ${JWT_Token}` },
      });
      alert("Vehicle added successfully!");
      setShowModal(false);
      setForm({
        Vehical_Name: "",
        Type_of_Vehical: "Bike",
        Image_URL: "",
        Rentel_Date: "",
        Return_Date: "",
        Total_Amount: ""
      });
    } catch (err) {
      alert(err.response?.data?.message || "Error adding vehicle");
    }
  };

  return (
    <div className="earn-main">
      {/* HERO SECTION */}
      <section className="earn-hero container">
        <h1 className="earn-heading">Earn Money By Renting Your Vehicle</h1>
        <p className="earn-text">
          List your vehicle on our platform and start earning instantly.
        </p>
        <button className="btn earn-btn-primary" onClick={() => setShowModal(true)}>
          Add Your Vehicle
        </button>
      </section>

    

      {/* FEATURES SECTION */}
      <section className="earn-features container mt-5">
        <div className="row justify-content-center gy-4">
          <div className="col-md-4">
            <div className="feature-box shadow-sm">
              <div className="feature-icon">🏍️</div>
              <h3>Add Your Vehicle</h3>
              <p>Upload your vehicle details and get verified quickly.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box shadow-sm">
              <div className="feature-icon">📅</div>
              <h3>Get Bookings</h3>
              <p>Users nearby will book your vehicle instantly.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box shadow-sm">
              <div className="feature-icon">💸</div>
              <h3>Earn Money</h3>
              <p>Earn for every successful rental and withdraw anytime.</p>
            </div>
          </div>
        </div>
      </section>
        {/* CITY SECTION */}
      <TopCities/>

      {/* Add Vehicle Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ background: "#000000aa" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4">
              <h4>Add Your Vehicle</h4>

              <input
                className="form-control mb-2"
                name="Vehical_Name"
                placeholder="Vehicle Name"
                value={form.Vehical_Name}
                onChange={handleChange}
              />

              <select
                className="form-select mb-2"
                name="Type_of_Vehical"
                value={form.Type_of_Vehical}
                onChange={handleChange}
              >
                <option>Bike</option>
                <option>Car</option>
                <option>Scooty</option>
              </select>

              <input
                className="form-control mb-2"
                name="Image_URL"
                placeholder="Image URL"
                value={form.Image_URL}
                onChange={handleChange}
              />

              <div className="row">
                <div className="col">
                  <input
                    type="date"
                    className="form-control mb-2"
                    name="Rentel_Date"
                    value={form.Rentel_Date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control mb-2"
                    name="Return_Date"
                    value={form.Return_Date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <input
                className="form-control mb-3"
                name="Total_Amount"
                placeholder="Total Amount"
                value={form.Total_Amount}
                onChange={handleChange}
              />

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Add Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Earn_Home;
