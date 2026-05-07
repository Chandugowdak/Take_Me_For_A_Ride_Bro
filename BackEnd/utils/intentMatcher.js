const matchIntent = (message) => {
  const msg = message.toLowerCase();

  // Greeting
  if (
    msg.includes("hi") ||
    msg.includes("hello") ||
    msg.includes("hey") ||
    msg.includes("good morning") ||
    msg.includes("good evening")
  ) {
    return "greeting";
  }

  // Vehicle Inquiry
  if (
    msg.includes("car") ||
    msg.includes("bike") ||
    msg.includes("vehicle") ||
    msg.includes("scooter") ||
    msg.includes("rent vehicle")
  ) {
    return "vehicle";
  }

  // Price Inquiry
  if (
    msg.includes("price") ||
    msg.includes("cost") ||
    msg.includes("rate") ||
    msg.includes("charges") ||
    msg.includes("rental fee")
  ) {
    return "price";
  }

  // Booking
  if (
    msg.includes("book") ||
    msg.includes("booking") ||
    msg.includes("reserve") ||
    msg.includes("rent now")
  ) {
    return "booking";
  }

  // Availability
  if (
    msg.includes("available") ||
    msg.includes("availability") ||
    msg.includes("is car available") ||
    msg.includes("is bike available")
  ) {
    return "availability";
  }

  // Location
  if (
    msg.includes("location") ||
    msg.includes("where") ||
    msg.includes("pickup") ||
    msg.includes("drop") ||
    msg.includes("office")
  ) {
    return "location";
  }

  // Payment
  if (
    msg.includes("payment") ||
    msg.includes("pay") ||
    msg.includes("upi") ||
    msg.includes("card") ||
    msg.includes("cash")
  ) {
    return "payment";
  }

  // Documents
  if (
    msg.includes("license") ||
    msg.includes("document") ||
    msg.includes("id proof") ||
    msg.includes("aadhaar") ||
    msg.includes("driving license")
  ) {
    return "documents";
  }

  // Offers / Coupons
  if (
    msg.includes("offer") ||
    msg.includes("discount") ||
    msg.includes("coupon") ||
    msg.includes("promo code")
  ) {
    return "offers";
  }

  // Cancellation
  if (
    msg.includes("cancel") ||
    msg.includes("refund") ||
    msg.includes("return booking")
  ) {
    return "cancellation";
  }

  // Contact Support
  if (
    msg.includes("support") ||
    msg.includes("customer care") ||
    msg.includes("contact") ||
    msg.includes("call")
  ) {
    return "support";
  }

  // Login/Register
  if (
    msg.includes("login") ||
    msg.includes("sign in") ||
    msg.includes("register") ||
    msg.includes("signup") ||
    msg.includes("create account")
  ) {
    return "account";
  }

  // Help
  if (
    msg.includes("help") ||
    msg.includes("guide") ||
    msg.includes("how to use")
  ) {
    return "help";
  }

  return "unknown";
};

module.exports = { matchIntent };