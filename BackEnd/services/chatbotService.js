const { matchIntent } = require("../utils/intentMatcher");

const getBotResponse = (message) => {
  const intent = matchIntent(message);

  switch (intent) {
    case "greeting":
      return "Hello 👋 Welcome to Take Me For A Ride Bro! How can I help you?";

    case "vehicle":
      return "We have cars, bikes, and scooters available for rent.";

    case "price":
      return "Our rental prices start from ₹500/day depending on the vehicle.";

    case "booking":
      return "To book a vehicle, select your preferred vehicle and choose rental dates.";

    case "availability":
      return "Please enter your travel dates to check vehicle availability.";

    case "location":
      return "We provide pickup and drop services at selected locations.";

    case "payment":
      return "We accept UPI, Debit/Credit Cards, and Cash payments.";

    case "documents":
      return "You need a valid Driving License and ID proof to rent a vehicle.";

    case "offers":
      return "Current offers: 10% OFF on first booking and weekend discounts.";

    case "cancellation":
      return "Bookings can be cancelled before 24 hours for a full refund.";

    case "support":
      return "You can contact our support team at chandugowdaks12@gmail.com";

    case "account":
      return "You can login or create a new account from the top-right menu.";

    case "help":
      return "You can ask about booking, prices, vehicles, payments, offers, and more.";

    default:
      return "Sorry 😅 I didn't understand that. Please ask about booking, prices, vehicles, or support.";
  }
};

module.exports = { getBotResponse };