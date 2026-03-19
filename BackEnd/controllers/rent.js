const express = require('express');
const Rent_Model = require('../model/Rentel');
const User_Model = require('../model/User');


// ✅ ADD VEHICLE
const Add_Vehical = async (req, res) => {

    const {
        Vehical_Name,
        Type_of_Vehical,
        Image_URL,
        pricePerDay,
        vehicleNumber,
        rcBookNumber,
        insuranceEndingDate
    } = req.body;

    try {
        // 🔒 VALIDATION FIXED
        if (!Vehical_Name || !Type_of_Vehical || !Image_URL ||
            !pricePerDay || pricePerDay <= 0 ||
            !vehicleNumber || !rcBookNumber || !insuranceEndingDate) {
            return res.status(400).json({ message: "All fields are required and price must be > 0" });
        }

        const userId = req.user.id;

        const newRentel = new Rent_Model({
            userId,
            Vehical_Name,
            Type_of_Vehical,
            Image_URL,
            pricePerDay,
            vehicleNumber,
            rcBookNumber,
            insuranceEndingDate
        });

        await newRentel.save();

        return res.status(201).json({
            message: "Vehical Added Successfully",
            rentel: newRentel
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error in Adding Vehical",
            error: err.message
        });
    }
};


// ✅ GET VEHICLES (OWNER VIEW)
const Get_Vehicals = async (req, res) => {
    try {
        const userId = req.user.id;

        const vehicals = await Rent_Model.find({ userId }).sort({ createdAt: -1 });

        if (vehicals.length === 0) {
            return res.status(404).json({
                message: "No Vehicals found for this user"
            });
        }

        return res.status(200).json({
            message: "Vehicals fetched successfully",
            count: vehicals.length,
            vehicals
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error in Fetching Vehicals",
            error: err.message
        });
    }
};


// ✅ UPDATE VEHICLE
const Update_Vehical = async (req, res) => {
    try {
        const vehicalId = req.params.id;
        const userId = req.user.id;

        const vehical = await Rent_Model.findOne({ _id: vehicalId, userId });

        if (!vehical) {
            return res.status(404).json({ message: "Vehical not found" });
        }

        const {
            Vehical_Name,
            Type_of_Vehical,
            Image_URL,
            pricePerDay,
            vehicleNumber,
            rcBookNumber,
            insuranceEndingDate
        } = req.body;

        if (Vehical_Name) vehical.Vehical_Name = Vehical_Name;
        if (Type_of_Vehical) vehical.Type_of_Vehical = Type_of_Vehical;
        if (Image_URL) vehical.Image_URL = Image_URL;

        // 🔥 FIXED BUG
        if (pricePerDay !== undefined && pricePerDay > 0) {
            vehical.pricePerDay = pricePerDay;
        }

        if (vehicleNumber) vehical.vehicleNumber = vehicleNumber;
        if (rcBookNumber) vehical.rcBookNumber = rcBookNumber;
        if (insuranceEndingDate) vehical.insuranceEndingDate = insuranceEndingDate;

        await vehical.save();

        return res.status(200).json({
            message: "Vehical updated successfully",
            vehical
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error in Updating Vehical",
            error: err.message
        });
    }
};


// ✅ DELETE VEHICLE
const Delete_Vehical = async (req, res) => {
    try {
        const vehicalId = req.params.id;
        const userId = req.user.id;

        const vehical = await Rent_Model.findOneAndDelete({
            _id: vehicalId,
            userId
        });

        if (!vehical) {
            return res.status(404).json({ message: "Vehical not found" });
        }

        return res.status(200).json({
            message: "Vehical deleted successfully"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error in Deleting Vehical",
            error: err.message
        });
    }
};


// ✅ GET ALL VEHICLES (PUBLIC VIEW 🔒)
const Get_All_Vehicals = async (req, res) => {
    try {
        const Vehicals = await Rent_Model.find()
            .select('-vehicleNumber -rcBookNumber') // 🔒 hide sensitive data
            .sort({ createdAt: -1 });

        if (Vehicals.length === 0) {
            return res.status(404).json({ message: "No Vehicals found" });
        }

        return res.status(200).json({
            message: "All Vehicals fetched successfully",
            count: Vehicals.length,
            Vehicals
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error in Fetching All Vehicals",
            error: err.message
        });
    }
};


// ✅ GET LOGGED-IN USER DATA
const Get_User_Data = async (req, res) => {
    try {
        const userId = req.user.id;

        const userData = await User_Model.findById(userId).select("-password");

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            message: "User Data fetched successfully",
            userData
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Server Error in Fetching User Data"
        });
    }
};


module.exports = {
    Add_Vehical,
    Get_Vehicals,
    Update_Vehical,
    Delete_Vehical,
    Get_All_Vehicals,
    Get_User_Data
};