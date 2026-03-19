import React, { useContext, useState } from "react";
import { GlobelValue } from "../../context/GlobelVariable";
import axios from "axios";
import "./Earn_Home.css";
import TopCities from "../../Footer_Section/TopCities";
import Testimonials from "../../Common_Component/Testimonials";
import EarnFeatures from "./EarnFeatures";

const Earn_Home = () => {
  const { JWT_Token } = useContext(GlobelValue);

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    Vehical_Name: "",
    Type_of_Vehical: "Bike",
    Image_URL: "",
    pricePerDay: "", // ✅ NEW
    vehicleNumber: "",
    rcBookNumber: "",
    insuranceEndingDate: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {

      if (!form.pricePerDay || form.pricePerDay <= 0) {
        return alert("Price per day must be greater than 0");
      }

      await axios.post(
        "http://localhost:3000/api/add/vehical",
        form,
        {
          headers: { Authorization: `Bearer ${JWT_Token}` },
        }
      );

      alert("Vehicle added successfully!");
      setShowModal(false);

      // reset form
      setForm({
        Vehical_Name: "",
        Type_of_Vehical: "Bike",
        Image_URL: "",
        pricePerDay: "",
        vehicleNumber: "",
        rcBookNumber: "",
        insuranceEndingDate: ""
      });

    } catch (err) {
      alert(err.response?.data?.message || "Error adding vehicle");
    }
  };

  return (
    <div className="earn-main">

      {/* HERO SECTION */}
      <section className="earn-hero container">
        <h1 className="earn-heading">
          Earn Money By Renting Your Vehicle
        </h1>
        <p className="earn-text">
          List your vehicle on our platform and start earning instantly.
        </p>
        <button
          className="btn earn-btn-primary"
          onClick={() => setShowModal(true)}
        >
          Add Your Vehicle
        </button>
      </section>

      {/* FEATURES */}
      <EarnFeatures />

      {/* MODAL */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "#000000aa" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4 p-4">
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

              {/* ✅ REPLACED TOTAL AMOUNT WITH PRICE PER DAY */}
              <input
                className="form-control mb-2"
                name="pricePerDay"
                placeholder="Price Per Day (INR)"
                value={form.pricePerDay}
                onChange={handleChange}
              />

              {/* VEHICLE DETAILS */}
              <input
                className="form-control mb-2"
                name="vehicleNumber"
                placeholder="Vehicle Number"
                value={form.vehicleNumber}
                onChange={handleChange}
              />

              <input
                className="form-control mb-2"
                name="rcBookNumber"
                placeholder="RC Book Number"
                value={form.rcBookNumber}
                onChange={handleChange}
              />

              <input
                type="date"
                className="form-control mb-3"
                name="insuranceEndingDate"
                value={form.insuranceEndingDate}
                onChange={handleChange}
              />

              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Add Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <TopCities />
      <Testimonials />
    </div>
  );
};

export default Earn_Home;