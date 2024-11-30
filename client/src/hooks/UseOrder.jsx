import { useState } from "react";
import { placeOrder } from "../services/OrderService";

const useOrder = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [packages, setPackages] = useState([]);

  const handlePlaceOrder = async () => {
    try {
      const result = await placeOrder(selectedItems);
      setPackages(result.packages);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return { selectedItems, setSelectedItems, packages, handlePlaceOrder };
};

export default useOrder;
