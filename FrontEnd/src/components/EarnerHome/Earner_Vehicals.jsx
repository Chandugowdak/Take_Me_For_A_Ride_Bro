import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobelValue } from "../../context/GlobelVariable";
import "./Earner_Vehical.css";

const Earner_Vehical = () => {
  const { JWT_Token } = useContext(GlobelValue);
  const [vehicals, setVehicals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit Modal State
  const [editModal, setEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    Vehical_Name: "",
    Type_of_Vehical: "Bike",
    Image_URL: "",
    Rentel_Date: "",
    Return_Date: "",
    Total_Amount: "",
    vehicleNumber: "",
    rcBookNumber: "",
    insuranceEndingDate: ""
  });

  // Fetch vehicles
  const fetchVehicals = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/get/vehicals", {
        headers: { Authorization: `Bearer ${JWT_Token}` },
      });
      setVehicals(res.data.vehicals || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicals();
  }, []);

  // Delete vehicle
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this vehicle?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/vehical/delete/${id}`, {
        headers: { Authorization: `Bearer ${JWT_Token}` },
      });
      alert("Vehicle deleted successfully!");
      fetchVehicals();
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting vehicle");
    }
  };

  // Open edit modal
  const handleEdit = (v) => {
    setEditForm({
      id: v._id,
      Vehical_Name: v.Vehical_Name,
      Type_of_Vehical: v.Type_of_Vehical,
      Image_URL: v.Image_URL,
      Rentel_Date: v.Rentel_Date?.split("T")[0] || "",
      Return_Date: v.Return_Date?.split("T")[0] || "",
      Total_Amount: v.Total_Amount,
      vehicleNumber: v.vehicleNumber,
      rcBookNumber: v.rcBookNumber,
      insuranceEndingDate: v.insuranceEndingDate?.split("T")[0] || ""
    });
    setEditModal(true);
  };

  // Update vehicle
  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/vehical/update/${editForm.id}`,
        {
          Vehical_Name: editForm.Vehical_Name,
          Type_of_Vehical: editForm.Type_of_Vehical,
          Image_URL: editForm.Image_URL,
          Rentel_Date: editForm.Rentel_Date,
          Return_Date: editForm.Return_Date,
          Total_Amount: editForm.Total_Amount,
          vehicleNumber: editForm.vehicleNumber,
          rcBookNumber: editForm.rcBookNumber,
          insuranceEndingDate: editForm.insuranceEndingDate
        },
        { headers: { Authorization: `Bearer ${JWT_Token}` } }
      );
      alert("Vehicle updated successfully!");
      setEditModal(false);
      fetchVehicals();
    } catch (err) {
      alert(err.response?.data?.message || "Error updating vehicle");
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (vehicals.length === 0) {
    return (
      <div className="text-center mt-5 text-muted">
        <h4>No vehicles added yet 🚫</h4>
        <p>Add your first vehicle and start earning.</p>
      </div>
    );
  }

  return (
    <section className="earner-page container">
      <h2 className="earner-title text-center mb-4">Your Listed Vehicles</h2>

      <div className="row g-4">
        {vehicals.map((v) => (
          <div key={v._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="vehical-card h-100">
              <div className="vehical-img">
                <img src={v.Image_URL} alt={v.Vehical_Name} />
                <span className="vehical-type">{v.Type_of_Vehical}</span>
              </div>

              <div className="vehical-body">
                <h5 className="vehical-title">{v.Vehical_Name}</h5>
                <div className="vehical-meta">
                  <p>
                    <strong>From:</strong>{" "}
                    {new Date(v.Rentel_Date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>To:</strong>{" "}
                    {new Date(v.Return_Date).toLocaleDateString()}
                  </p>
                </div>
                <div className="vehical-price">₹ {v.Total_Amount}</div>

                <div className="vehical-actions">
                  <button
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => handleEdit(v)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(v._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editModal && (
        <div className="modal fade show d-block" style={{ background: "#000000aa" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-4 rounded-4">
              <h4 className="mb-3">Edit Vehicle</h4>

              <input
                className="form-control mb-2"
                name="Vehical_Name"
                placeholder="Vehicle Name"
                value={editForm.Vehical_Name}
                onChange={handleChange}
              />

              <select
                className="form-select mb-2"
                name="Type_of_Vehical"
                value={editForm.Type_of_Vehical}
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
                value={editForm.Image_URL}
                onChange={handleChange}
              />

              <div className="row">
                <div className="col">
                  <input
                    type="date"
                    className="form-control mb-2"
                    name="Rentel_Date"
                    value={editForm.Rentel_Date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control mb-2"
                    name="Return_Date"
                    value={editForm.Return_Date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <input
                className="form-control mb-2"
                name="Total_Amount"
                placeholder="Total Amount"
                value={editForm.Total_Amount}
                onChange={handleChange}
              />

              {/* ✅ Added new fields */}
              <input
                className="form-control mb-2"
                name="vehicleNumber"
                placeholder="Vehicle Number"
                value={editForm.vehicleNumber}
                onChange={handleChange}
              />

              <input
                className="form-control mb-2"
                name="rcBookNumber"
                placeholder="RC Book Number"
                value={editForm.rcBookNumber}
                onChange={handleChange}
              />

              <input
                type="date"
                className="form-control mb-3"
                name="insuranceEndingDate"
                placeholder="Insurance Ending Date"
                value={editForm.insuranceEndingDate}
                onChange={handleChange}
              />

              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Update Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Earner_Vehical;
