import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobelValue } from "../../context/GlobelVariable";
import "./Earn_Home.css";

const Earner_Vehicals = () => {
  const { JWT_Token } = useContext(GlobelValue);
  const [vehicals, setVehicals] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    Vehical_Name: "",
    Type_of_Vehical: "Bike",
    Image_URL: "",
    Rentel_Date: "",
    Return_Date: "",
    Total_Amount: ""
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
    }
  };

  useEffect(() => {
    fetchVehicals();
  }, []);

  // Handle Edit Form Change
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Open Edit Modal
  const handleEdit = (v) => {
    setEditForm({
      id: v._id,
      Vehical_Name: v.Vehical_Name,
      Type_of_Vehical: v.Type_of_Vehical,
      Image_URL: v.Image_URL,
      Rentel_Date: v.Rentel_Date?.split("T")[0] || "",
      Return_Date: v.Return_Date?.split("T")[0] || "",
      Total_Amount: v.Total_Amount
    });
    setEditModal(true);
  };

  // Submit Edit
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
          Total_Amount: editForm.Total_Amount
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

  // Delete Vehicle
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

  if (vehicals.length === 0)
    return <p className="text-center mt-4">No vehicles added yet.</p>;

  return (
    <section className="container mt-5">
      <h2 className="mb-4 text-center">Your Vehicles</h2>
      <div className="row g-4">
        {vehicals.map((v) => (
          <div key={v._id} className="col-md-4 col-sm-6">
            <div className="feature-box h-100">
              <img
                src={v.Image_URL}
                alt={v.Vehical_Name}
                className="img-fluid rounded mb-3"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <h5>{v.Vehical_Name}</h5>
              <p>Type: {v.Type_of_Vehical}</p>
              <p>₹ {v.Total_Amount}</p>
              <div className="d-flex justify-content-between mt-2">
                <button className="btn btn-sm btn-warning" onClick={() => handleEdit(v)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(v._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Vehicle Modal */}
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
                className="form-control mb-3"
                name="Total_Amount"
                placeholder="Total Amount"
                value={editForm.Total_Amount}
                onChange={handleChange}
              />

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={() => setEditModal(false)}>
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

export default Earner_Vehicals;
