const Request_Model = require('../model/Request');
const Rent_Model = require('../model/Rentel');
const Coupon = require('../model/OfferSchema');


// ✅ SEND REQUEST
const sendRequest = async (req, res) => {
  try {
    const userId = req.user.id;
    const { rentalId, startDate, endDate, couponCode } = req.body;

    // ✅ VALIDATION
    if (!rentalId || !startDate || !endDate ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end <= start) {
      return res.status(400).json({
        message: "End date must be after start date"
      });
    }

    // ✅ CHECK VEHICLE EXISTS
    const rental = await Rent_Model.findById(rentalId);
    if (!rental) {
      return res.status(404).json({
        message: "Vehicle not found"
      });
    }

    // ❌ Prevent self rent
    if (rental.userId.toString() === userId) {
      return res.status(400).json({
        message: "You cannot rent your own vehicle"
      });
    }

    // ❌ CHECK AVAILABILITY (🔥 IMPORTANT FIX)
    const overlappingBooking = await Request_Model.findOne({
      rentalId,
      status: "accepted", // only confirmed bookings
      startDate: { $lte: end },
      endDate: { $gte: start }
    });

    if (overlappingBooking) {
      return res.status(400).json({
        message: "Vehicle is already booked for selected dates"
      });
    }

    // ❌ LIMIT: max 3 rejected attempts
    const rejectedCount = await Request_Model.countDocuments({
      userId,
      rentalId,
      status: "declined"
    });

    if (rejectedCount >= 3) {
      return res.status(403).json({
        message: "Request limit exceeded"
      });
    }

    // ❌ Prevent duplicate pending
    const alreadyRequested = await Request_Model.findOne({
      userId,
      rentalId,
      status: "pending"
    });

    if (alreadyRequested) {
      return res.status(400).json({
        message: "Request already sent"
      });
    }

    // ✅ CALCULATE DAYS
    const numberOfDays = Math.ceil(
      (end - start) / (1000 * 60 * 60 * 24)
    );

    // ✅ TOTAL AMOUNT
    const totalAmount = numberOfDays * rental.pricePerDay;

    
   

      // ✅ APPLY COUPON

let discountAmount = 0;
let DiscountedAmount = 0 ;

if (couponCode) {
  const coupon = await Coupon.findOne({ code: couponCode.toUpperCase() });

  if (!coupon) {
    return res.status(400).json({
      message: "Invalid coupon code"
    });
  }

  if (new Date() > new Date(coupon.expiry)) {
    return res.status(400).json({
      message: "Coupon expired"
    });
  }

  // ✅ Apply discount
  discountAmount = (totalAmount * coupon.discountPercent) / 100;
}

    // ✅ CREATE REQUEST
 const request = await Request_Model.create({
  userId,
  rentalId,
  startDate: start,
  endDate: end,
  numberOfDays,
  totalAmount,
  couponCode: couponCode || null,
  discountAmount,
  discountedAmount : Math.max(0, totalAmount - discountAmount),
});

    res.status(201).json({
      message: "Request sent successfully",
      request
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET PENDING REQUESTS (EARNER VIEW - NO PHONE)
const getPendingRequests = async (req, res) => {
  try {
    const earnerId = req.user.id;

    const requests = await Request_Model.find({ status: 'pending' })
      .populate({
        path: 'rentalId',
        match: { userId: earnerId },
        select: 'Vehical_Name Image_URL pricePerDay',
        populate: {
          path: 'userId',
          select: 'name email phone'
        }
      })
      .populate('userId', 'name email phone');

    const filtered = requests.filter(r => r.rentalId !== null);

    res.status(200).json(filtered);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// ✅ UPDATE REQUEST STATUS
const updateRequestStatus = async (req, res) => {
  try {
    const earnerId = req.user.id;
    const { status } = req.body;

    const request = await Request_Model.findById(req.params.id)
      .populate('rentalId');

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    // 🔒 Authorization
    if (request.rentalId.userId.toString() !== earnerId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // ✅ ACCEPT → calculate amount
if (status === "accepted") {
  const start = new Date(request.startDate);
  const end = new Date(request.endDate);

  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  const pricePerDay = request.rentalId.pricePerDay;

  const baseAmount = days * pricePerDay;

  // ✅ Apply stored discount
  request.totalAmount = baseAmount - (request.discountAmount || 0);
}

    request.status = status;
    await request.save();

    // ✅ SHOW PHONE ONLY AFTER ACCEPT
    let populatedRequest;

    if (status === "accepted") {
      populatedRequest = await Request_Model.findById(request._id)
        .populate({
          path: 'rentalId',
          select: 'Vehical_Name Image_URL pricePerDay',
          populate: {
            path: 'userId',
            select: 'name email phone'
          }
        })
        .populate('userId', 'name email phone');
    } else {
      populatedRequest = await Request_Model.findById(request._id)
        .populate({
          path: 'rentalId',
          select: 'Vehical_Name Image_URL pricePerDay',
          populate: {
            path: 'userId',
            select: 'name email'
          }
        })
        .populate('userId', 'name email');
    }

    res.status(200).json({
      message: `Request ${status}`,
      request: populatedRequest
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// ✅ USER PENDING REQUESTS
const getUserPendingRequests = async (req, res) => {
  try {
    const userId = req.user.id;

    const pendingRequests = await Request_Model.find({
      userId,
      status: 'pending'
    })
      .populate({
        path: 'rentalId',
        select: 'Vehical_Name Image_URL pricePerDay userId',
        populate: {
          path: 'userId',
          select: 'name email'
        }
      });

    res.status(200).json({
      totalPending: pendingRequests.length,
      pendingRequests
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// ✅ CANCEL REQUEST
const cancelRequest = async (req, res) => {
  try {
    const userId = req.user.id;

    const request = await Request_Model.findOne({
      _id: req.params.id,
      userId,
      status: 'pending'
    });

    if (!request) {
      return res.status(400).json({
        message: "Request not found or already processed"
      });
    }

    await request.deleteOne();

    res.status(200).json({
      message: "Request cancelled successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// ✅ EARNER EARNINGS
const getEarnerEarnings = async (req, res) => {
  try {
    const earnerId = req.user.id;

    const requests = await Request_Model.find({ status: 'accepted' })
      .populate({
        path: 'rentalId',
        match: { userId: earnerId },
        select: 'Vehical_Name Image_URL pricePerDay',
      })
      .populate({
        path: 'userId',   // ✅ ADD THIS
        select: 'name email phone' // 👈 what you want
      });

    // ✅ Filter only this earner's vehicles
    const earnings = requests.filter(r => r.rentalId !== null);

    // ✅ Calculate earnings
    const totalEarnings = earnings.reduce((sum, r) => {
      return sum + (r.totalAmount || 0);
    }, 0);

    res.status(200).json({
      totalEarnings,
      totalTrips: earnings.length,
      earnings
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// ✅ USER ALL REQUESTS
const getUserAllRequests = async (req, res) => {
  try {
    const userId = req.user.id;

    const requests = await Request_Model.find({ userId })
      .populate({
        path: 'rentalId',
        select: 'Vehical_Name Image_URL pricePerDay userId',
        populate: {
          path: 'userId',
          select: 'name email phone'
        }
      });

    // ✅ Remove invalid rentals
    const validRequests = requests.filter(r => r.rentalId !== null);

    // ✅ 🔐 Hide phone for non-accepted requests
    const safeRequests = validRequests.map((req) => {
      const obj = req.toObject();

      if (obj.status !== "accepted") {
        if (obj.rentalId?.userId) {
          delete obj.rentalId.userId.phone;
        }
      }

      return obj;
    });

    // ✅ Categorize
    const pending = safeRequests.filter(r => r.status === 'pending');
    const accepted = safeRequests.filter(r => r.status === 'accepted');
    const rejected = safeRequests.filter(r => r.status === 'declined');

    res.status(200).json({
      totalRequests: safeRequests.length,
      counts: {
        pending: pending.length,
        accepted: accepted.length,
        rejected: rejected.length
      },
      pending,
      accepted,
      rejected
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// ✅ EARNER ALL REQUESTS
const getAllEarnerRequests = async (req, res) => {
  try {
    const earnerId = req.user.id;

    const requests = await Request_Model.find({})
      .populate({
        path: 'rentalId',
        match: { userId: earnerId },
        select: 'Vehical_Name Image_URL pricePerDay',
      })
      .populate('userId', 'name email phone');

    const earnerRequests = requests.filter(r => r.rentalId !== null);

    const pending = earnerRequests.filter(r => r.status === 'pending');
    const accepted = earnerRequests.filter(r => r.status === 'accepted');
    const rejected = earnerRequests.filter(r => r.status === 'declined');

    res.status(200).json({
      totalRequests: earnerRequests.length,
      counts: {
        pending: pending.length,
        accepted: accepted.length,
        rejected: rejected.length
      },
      pending,
      accepted,
      rejected
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  sendRequest,
  getPendingRequests,
  updateRequestStatus,
  getUserPendingRequests,
  cancelRequest,
  getEarnerEarnings,
  getUserAllRequests,
  getAllEarnerRequests
};