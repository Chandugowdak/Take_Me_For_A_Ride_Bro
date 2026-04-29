const matchIntent = (message) => {
  const msg = message.toLowerCase();

  if (msg.includes("hi") || msg.includes("hello")) {
    return "greeting";
  }

  if (msg.includes("car") || msg.includes("bike") || msg.includes("vehicle")) {
    return "vehicle";
  }

  if (msg.includes("price") || msg.includes("cost")) {
    return "price";
  }

  if (msg.includes("book")) {
    return "booking";
  }

  if (msg.includes("help")) {
    return "help";
  }

  return "unknown";
};

module.exports = { matchIntent };