// DeleteCoupon.jsx

import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import axios from "axios";

import "./DeleteCoupon.css";

import { toast } from "react-toastify";

import { GlobelValue } from "../../context/GlobelVariable";

const DeleteCoupon = () => {

  const [coupons, setCoupons] = useState([]);

  const [loading, setLoading] = useState(true);

  const { JWT_Token } =
    useContext(GlobelValue);

  // ================= LOAD COUPONS =================

  useEffect(() => {
    loadCoupons();
  }, []);

  const loadCoupons = async () => {

    try {

      const res = await axios.get(
        "http://localhost:3000/api/get/coupon"
      );

      setCoupons(res.data.CouponData);

    } catch (err) {

      console.log(err);

      toast.error(
        "Failed To Load Coupons"
      );

    } finally {

      setLoading(false);

    }
  };

  // ================= DELETE COUPON =================

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are You Sure Want To Delete?"
      );

    if (!confirmDelete) return;

    try {

      const res = await axios.delete(
        `http://localhost:3000/api/delete/coupon/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${JWT_Token}`,
          },
        }
      );

      toast.success(res.data.message);

      // REMOVE FROM UI

      setCoupons(
        coupons.filter(
          (item) => item._id !== id
        )
      );

    } catch (err) {

      console.log(err);

      toast.error(
        err.response?.data?.message ||
        "Delete Failed"
      );

    }
  };

  return (
    <div className="delete-page">

      <div className="container">

        {/* ================= TITLE ================= */}

        <div className="delete-header">

          <h2>
            Manage Coupons 🎟️
          </h2>

          <p>
            Delete expired or unwanted
            coupons easily
          </p>

        </div>

        {/* ================= LOADING ================= */}

        {loading ? (

          <div className="text-center">
            <h5>Loading Coupons...</h5>
          </div>

        ) : coupons.length === 0 ? (

          <div className="empty-box">

            <h4>
              No Coupons Available
            </h4>

          </div>

        ) : (

          <div className="row g-4">

            {coupons.map((item) => {

              const expired =
                new Date(item.expiry) <
                new Date();

              return (

                <div
                  key={item._id}
                  className="
                    col-xl-4
                    col-lg-4
                    col-md-6
                    col-sm-12
                  "
                >

                  <div className="delete-card">

                    {/* STATUS */}

                    <span
                      className={`status-badge ${
                        expired
                          ? "expired"
                          : "active"
                      }`}
                    >
                      {expired
                        ? "Expired"
                        : "Active"}
                    </span>

                    {/* DISCOUNT */}

                    <h3 className="discount-text">
                      {
                        item.discountPercent
                      }
                      % OFF
                    </h3>

                    {/* CODE */}

                    <div className="coupon-code">
                      {item.code}
                    </div>

                    {/* DATE */}

                    <p className="expiry-date">
                      Valid Till{" "}
                      {new Date(
                        item.expiry
                      ).toLocaleDateString()}
                    </p>

                    {/* DELETE BTN */}

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(
                          item._id
                        )
                      }
                    >
                      Delete Coupon
                    </button>

                  </div>

                </div>

              );
            })}

          </div>

        )}

      </div>

    </div>
  );
};

export default DeleteCoupon;