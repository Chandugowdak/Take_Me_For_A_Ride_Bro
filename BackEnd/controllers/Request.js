const Request_Model = require('../model/Request');


// Send a new request
const sendRequest = async (req, res) => {
  try {
    const userId = req.user.id; // logged-in user
    const { rentalId } = req.body;

    // prevent duplicate request
    const alreadyRequested = await Request_Model.findOne({
      userId,
      rentalId
    });

    if (alreadyRequested) {
      return res.status(400).json({ message: "Request already sent" });
    }

    const request = await Request_Model.create({
      userId,
      rentalId
    });

    res.status(201).json({
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




module.exports = {
    sendRequest,
    getPendingRequests,
    updateRequestStatus,
    getUserRequests,
    cancelRequest
};
