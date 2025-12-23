const Request_Model = require('../model/Request');
const Rent_Model = require('../model/Rentel');
const User_Model = require('../model/User');

// ---------------------
// 1️⃣ Send Request (User)
const Send_Request = async (req, res) => {
    try {
        const { rentalId } = req.body;
        const userId = req.user.id;

        // Find rental to get earnerId
        const rental = await Rent_Model.findById(rentalId);
        if (!rental) {
            return res.status(404).json({ message: "Rental not found" });
        }

        const earnerId = rental.userId;

        // Check if request already exists
        const existingRequest = await Request_Model.findOne({ userId, rentalId });
        if (existingRequest) {
            return res.status(400).json({ message: "Request already sent for this rental" });
        }

        const newRequest = new Request_Model({
            userId,
            earnerId,
            rentalId,
            status: 'pending'
        });

        await newRequest.save();

        return res.status(201).json({ message: "Request sent successfully", request: newRequest });

    } catch (err) {
        return res.status(500).json({ message: "Server Error in sending request", error: err.message });
    }
};

// ---------------------
// 2️⃣ Get Pending Requests (Earner)
const Get_Pending_Requests = async (req, res) => {
    try {
        const earnerId = req.user.id;

        const requests = await Request_Model.find({ earnerId, status: 'pending' })
            .populate('rentalId')
            .populate('userId', 'name email');

        return res.status(200).json({ message: "Pending requests fetched", count: requests.length, requests });

    } catch (err) {
        return res.status(500).json({ message: "Server Error in fetching requests", error: err.message });
    }
};

// ---------------------
// 3️⃣ Accept / Decline Request (Earner)
const Update_Request_Status = async (req, res) => {
    try {
        const { requestId } = req.params;
        const { action } = req.body; // "accepted" or "declined"
        const earnerId = req.user.id;

        if (!['accepted', 'declined'].includes(action)) {
            return res.status(400).json({ message: "Invalid action" });
        }

        const request = await Request_Model.findOne({ _id: requestId, earnerId });
        if (!request) {
            return res.status(404).json({ message: "Request not found" });
        }

        request.status = action;
        await request.save();

        return res.status(200).json({ message: `Request ${action} successfully`, request });

    } catch (err) {
        return res.status(500).json({ message: "Server Error in updating request", error: err.message });
    }
};

// ---------------------
// 4️⃣ Get User Requests (User)
const Get_User_Requests = async (req, res) => {
    try {
        const userId = req.user.id;

        const requests = await Request_Model.find({ userId })
            .populate('rentalId')
            .populate('earnerId', 'name email');

        return res.status(200).json({ message: "User requests fetched", count: requests.length, requests });

    } catch (err) {
        return res.status(500).json({ message: "Server Error in fetching user requests", error: err.message });
    }
};

// ---------------------
// 5️⃣ Cancel Request (optional)
const Cancel_Request = async (req, res) => {
    try {
        const { requestId } = req.params;
        const userId = req.user.id;

        const request = await Request_Model.findOne({ _id: requestId, userId, status: 'pending' });
        if (!request) {
            return res.status(404).json({ message: "Request not found or cannot cancel" });
        }

        request.status = 'cancelled';
        await request.save();

        return res.status(200).json({ message: "Request cancelled successfully", request });

    } catch (err) {
        return res.status(500).json({ message: "Server Error in cancelling request", error: err.message });
    }
};

module.exports = {
    Send_Request,
    Get_Pending_Requests,
    Update_Request_Status,
    Get_User_Requests,
    Cancel_Request
};
