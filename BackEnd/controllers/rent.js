const express = require('express');
const Rent_Model = require('../model/Rentel');

//ADD VEHICAL CONTROLLER
const Add_Vehical = async (req, res) => {

    const {
        Vehical_Name,
        Type_of_Vehical,
        Image_URL,   // ✅ URL from frontend
        Rentel_Date,
        Return_Date,
        Total_Amount
    } = req.body;

    try {
        if (!Vehical_Name || !Type_of_Vehical || !Image_URL ||
            !Rentel_Date || !Return_Date || !Total_Amount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userId = req.user.id;

        const newRentel = new Rent_Model({
            userId,
            Vehical_Name,
            Type_of_Vehical,
            Image_URL,
            Rentel_Date,
            Return_Date,
            Total_Amount
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


//GET THE VEHICALS ADDED BY USER

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


//UPDATE API CALL
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
            Rentel_Date,
            Return_Date,
            Total_Amount
        } = req.body;

        if (Vehical_Name) vehical.Vehical_Name = Vehical_Name;
        if (Type_of_Vehical) vehical.Type_of_Vehical = Type_of_Vehical;
        if (Image_URL) vehical.Image_URL = Image_URL; 
        if (Rentel_Date) vehical.Rentel_Date = Rentel_Date;
        if (Return_Date) vehical.Return_Date = Return_Date;
        if (Total_Amount) vehical.Total_Amount = Total_Amount;

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




//DELETE API CALL
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


module.exports = {Add_Vehical , Get_Vehicals , Update_Vehical , Delete_Vehical};