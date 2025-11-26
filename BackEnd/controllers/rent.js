const express = require('express');
const Rent_Model = require('../model/Rentel');


const Add_Vehical = async (req, res) => {

    const { Vehical_Name, Type_of_Vehical, Rentel_Date, Return_Date, Total_Amount } = req.body;

    try {
        if (!Vehical_Name || !Type_of_Vehical || !Rentel_Date || !Return_Date || !Total_Amount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // 📌 Get Image from multer
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const Image_URL = req.file.path;

        const userId = req.user.id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized: User ID not found" });
        }

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
module.exports = Add_Vehical;