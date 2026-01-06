const Request_Model = require('../model/Request');



// Send a new request
const sendRequest = async (req, res) => {
  try {
    const userId = req.user.id;
    const { rentalId } = req.body;

    // ❌ BLOCK if vehicle already accepted earlier by this user
    const alreadyAccepted = await Request_Model.findOne({
      userId,
      rentalId,
      status: "accepted"
    });

    if (alreadyAccepted) {
      return res.status(400).json({
        message: "You have already used this vehicle"
      });
    }

    // ❌ RATE LIMIT: max 3 rejections per vehicle
    const rejectedCount = await Request_Model.countDocuments({
      userId,
      rentalId,
      status: "rejected"
    });

    if (rejectedCount > 3) {
      return res.status(403).json({
        message: "Request limit exceeded. You cannot request this vehicle again."
      });
    }

    // ❌ prevent duplicate pending request
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

    // ✅ create new request
    const request = await Request_Model.create({
      userId,
      rentalId
    });

    res.status(200).json({
      message: "Request sent successfully",
      request
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




// Get pending requests for the logged-in user (Earner)
const getPendingRequests = async (req, res) => {
  try {
    const earnerId = req.user.id;

    const requests = await Request_Model.find({ status: 'pending' })
      .populate({
        path: 'rentalId',
        match: { userId: earnerId }, // ONLY earner’s vehicles
        populate: {
          path: 'userId',
          select: 'name email'
        }
      })
      .populate('userId', 'name email');

    // Remove null rentals
    const filtered = requests.filter(r => r.rentalId !== null);

    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update request status (accept/decline)
const updateRequestStatus = async (req, res) => {
  try {
    const earnerId = req.user.id;
    const { status } = req.body;

    const request = await Request_Model.findById(req.params.id)
      .populate('rentalId');

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    // Authorization check
    if (request.rentalId.userId.toString() !== earnerId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    request.status = status;
    await request.save();

    res.json({
      message: `Request ${status}`,
      request
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all requests made by the logged-in user
const getUserRequests = async (req, res) => {
  try {
    const userId = req.user.id;

    const requests = await Request_Model.find({ userId })
      .populate({
        path: 'rentalId',
        populate: {
          path: 'userId',
          select: 'name email'
        }
      });

    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cancel a request
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

    res.json({ message: "Request cancelled successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




// Get all accepted requests / earnings of the logged-in earner
const getEarnerEarnings = async (req, res) => {
  try {
    const earnerId = req.user.id;

    const requests = await Request_Model.find({ status: 'accepted' })
      .populate({
        path: 'rentalId',
        match: { userId: earnerId }, // only earner's vehicles
        select: 'Vehical_Name Total_Amount Image_URL',
      })
      .populate('userId', 'name email'); // renter details

    // Remove null rentals (important)
    const earnings = requests.filter(r => r.rentalId !== null);

    // OPTIONAL: calculate total earnings
    const totalEarnings = earnings.reduce((sum, r) => {
      return sum + (r.rentalId.price || 0);
    }, 0);

    res.json({
      totalEarnings,
      totalTrips: earnings.length,
      earnings
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all accepted & used vehicles by the logged-in user (Renter)
const getUserAcceptedVehicles = async (req, res) => {
  try {
    const userId = req.user.id;

    const requests = await Request_Model.find({
      userId,
      status: 'accepted'
    })
      .populate({
        path: 'rentalId',
        select: 'Vehical_Name price Image_URL userId',
        populate: {
          path: 'userId',
          select: 'name email'
        }
      });

    res.json({
      totalTrips: requests.length,
      vehicles: requests
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Get ALL requests (pending / accepted / rejected) for logged-in Earner
const getAllEarnerRequests = async (req, res) => {
  try {
    const earnerId = req.user.id;

    const requests = await Request_Model.find({})
      .populate({
        path: 'rentalId',
        match: { userId: earnerId }, // ONLY earner vehicles
        select: 'Vehical_Name Image_URL Total_Amount',
      })
      .populate('userId', 'name email'); // renter details

    // Remove requests not related to this earner
    const earnerRequests = requests.filter(r => r.rentalId !== null);

    // Group by status
    const pending = earnerRequests.filter(r => r.status === 'pending');
    const accepted = earnerRequests.filter(r => r.status === 'accepted');
    const rejected = earnerRequests.filter(r => r.status === 'rejected');

    res.json({
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
    getUserRequests,
    cancelRequest,
    getEarnerEarnings,
    getUserAcceptedVehicles,
    getAllEarnerRequests
};
