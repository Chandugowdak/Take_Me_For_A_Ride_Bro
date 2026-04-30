const mongoose = require("mongoose");
const User = require("../model/User");
const Payment = require("../model/Payment");

exports.transferMoney = async (req, res) => {
  try {
    const { senderPhone, receiverPhone, amount } = req.body;

    // 1. Find sender
    const sender = await User.findOne({ phone: senderPhone });
    if (!sender) {
      return res.json({ success: false, message: "Sender not found" });
    }

    // 2. Find receiver
    const receiver = await User.findOne({ phone: receiverPhone });
    if (!receiver) {
      return res.json({ success: false, message: "Receiver not found" });
    }

    // 3. Transfer
    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    // 4. Save transaction
    await Payment.create({
      senderPhone,
      receiverPhone,
      amount,
      status: "SUCCESS",
    });

    res.json({
      success: true,
      message: "Payment Successful",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "An error occurred during the transaction",
      error: error.message,
    });

    await Payment.create({
      senderPhone: req.body.senderPhone,
      receiverPhone: req.body.receiverPhone,
      amount: req.body.amount,
      status: "FAILED",
    });

    res.json({
      success: false,
      message: "Transaction Failed",
    });
  }
};
