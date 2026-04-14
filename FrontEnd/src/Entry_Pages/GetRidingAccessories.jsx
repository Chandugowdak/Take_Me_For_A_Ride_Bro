import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetRidingAccessories.css';
import { toast } from "react-toastify";

const GetRidingAccessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(false);

  const Handel_Static_Data = async () => {
    try {
      setLoading(true);
      const resp = await axios.get('http://localhost:3000/api/static/data');
      setAccessories(resp.data.data.accessories);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error('🚨 Server Error');
      console.log(err.message);
    }
  };

  useEffect(() => {
    Handel_Static_Data();
  }, []);

  // 🔥 AMAZON REDIRECT FUNCTION
  const handleViewAccessory = (name) => {
    toast.info(`Redirecting to Amazon for "${name}" 🛒`);

    setTimeout(() => {
      const query = encodeURIComponent(name);
      window.open(`https://www.amazon.in/s?k=${query}`, "_blank");
    }, 1200);
  };

  return (
    <div className="accessories-wrapper container-fluid py-5">
      <h2 className="text-center accessories-title mb-5">
        Premium Riding Accessories
      </h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-dark"></div>
        </div>
      ) : (
        <div className="row justify-content-center">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
            >
              <div className="accessory-card">

                {/* IMAGE */}
                <div className="accessory-image">
                  <img src={item.Image} alt={item.Name} />
                  <span className="discount-tag">
                    {item['Discount%']}% OFF
                  </span>
                </div>

                {/* CONTENT */}
                <div className="accessory-content">
                  <h5>{item.Name}</h5>

                  <p className="description">
                    {item.Description.split('\n')[0]}
                  </p>

                  <div className="vehicle-tags">
                    {item.Type_Of_Vehical_We_Use.map((type, index) => (
                      <span key={index} className="vehicle-chip">
                        {type}
                      </span>
                    ))}
                  </div>

                  <div className="price-row">
                    <span className="price">₹{item.Price}</span>
                  </div>

                  <button
                    onClick={() => handleViewAccessory(item.Name)}
                    className="btn btn-dark w-100 mt-3 view-btn"
                  >
                    View on Amazon
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetRidingAccessories;