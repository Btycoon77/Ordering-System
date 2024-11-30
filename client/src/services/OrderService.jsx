import axios from "axios";

const BASE_URL = "http://localhost:5000/api/orders";

export const placeOrder = async (items) => {
  try {
    const response = await axios.post(`${BASE_URL}/place-order`, { items });
    return response.data;
  } catch (error) {
    console.error("Error in placeOrder:", error);
    throw error;
  }
};
