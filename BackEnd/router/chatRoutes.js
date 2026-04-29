const express = require("express");
const chatrouter = express.Router();

const { handleChat } = require("../controllers/chatController");

// POST /api/chat
chatrouter.post("/chat", handleChat);

module.exports = chatrouter;