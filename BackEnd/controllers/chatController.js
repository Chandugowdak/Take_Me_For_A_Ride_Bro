const { getBotResponse } = require("../services/chatbotService");

const handleChat = (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required" });
    }

    const reply = getBotResponse(message);

    res.json({ reply });
  } catch (error) {
    res.status(500).json({ reply: "Something went wrong" });
  }
};

module.exports = { handleChat };