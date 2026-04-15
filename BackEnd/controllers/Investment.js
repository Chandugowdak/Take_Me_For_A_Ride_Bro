const investorSchema = require('../model/InvestmentSchema');

// CREATE Investor Request
const  createInvestor = async (req, res) => {
  try {
    const { name, email, phone, investment_Range, message } = req.body;

    // Validation
    if (!name || !email || !investment_Range || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Save to DB
    const newInvestor = new investorSchema({
      name,
      email,
      phone,
      investment_Range,
      message,
    });

    await newInvestor.save();

    res.status(201).json({
      success: true,
      message: "Investment request submitted successfully",
      data: newInvestor,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = createInvestor;