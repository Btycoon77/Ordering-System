const { divideIntoPackages } = require("../services/OrderService");

// Controller for handling the order placement
const placeOrder = (req, res) => {
  try {
    const { items } = req.body; // Extract items from the request body
    const packages = divideIntoPackages(items); // Use the service to process the order
    res.status(200).json({ packages }); // Send response with the calculated packages
  } catch (error) {
    console.error("Error processing order:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the order." });
  }
};

module.exports = { placeOrder };
