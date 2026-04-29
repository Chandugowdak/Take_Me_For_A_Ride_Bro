const { matchIntent } = require("../utils/intentMatcher");

const getBotResponse = (message) => {
  const intent = matchIntent(message);

  switch (intent) {
    case "greeting":
      return "Hello! How can I help you today?";

    case "vehicle":
      return "We have cars and bikes available. What are you looking for?";

    case "price":
      return "Our vehicles start from ₹500 per day.";

    case "booking":
      return "To book a vehicle, select one and choose your dates.";

    case "help":
      return "You can ask about vehicles, prices, or booking.";

    default:
      return "Sorry, I didn’t understand. Try asking about cars, bikes, or booking.";
  }
};

module.exports = { getBotResponse };