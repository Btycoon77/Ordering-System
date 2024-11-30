import React, { useState } from "react";
import ProductList from "../components/ProductList";
import { placeOrder } from "../services/OrderService";

const items = [
  { id: 1, name: "Item 1", price: 10, weight: 200 },
  { id: 2, name: "Item 2", price: 100, weight: 20 },
  { id: 3, name: "Item 3", price: 30, weight: 300 },
  { id: 4, name: "Item 4", price: 20, weight: 500 },
  { id: 5, name: "Item 5", price: 30, weight: 250 },
  { id: 6, name: "Item 6", price: 40, weight: 10 },
  { id: 7, name: "Item 7", price: 120, weight: 10 },
  { id: 8, name: "Item 8", price: 130, weight: 500 },
  { id: 9, name: "Item 9", price: 20, weight: 790 },
  { id: 10, name: "Item 10", price: 10, weight: 100 },
  { id: 11, name: "Item 11", price: 4, weight: 340 },
  { id: 12, name: "Item 12", price: 5, weight: 800 },
  { id: 13, name: "Item 13", price: 240, weight: 200 },
  { id: 14, name: "Item 14", price: 123, weight: 20 },
  { id: 15, name: "Item 15", price: 245, weight: 700 },
  { id: 16, name: "Item 16", price: 230, weight: 10 },
  { id: 17, name: "Item 17", price: 110, weight: 20 },
  { id: 18, name: "Item 18", price: 45, weight: 200 },
  { id: 19, name: "Item 19", price: 67, weight: 200 },
  { id: 20, name: "Item 20", price: 88, weight: 20 },
  { id: 21, name: "Item 21", price: 10, weight: 300 },
  { id: 22, name: "Item 22", price: 17, weight: 500 },
  { id: 23, name: "Item 23", price: 19, weight: 250 },
  { id: 24, name: "Item 24", price: 89, weight: 10 },
  { id: 25, name: "Item 25", price: 45, weight: 10 },
  { id: 26, name: "Item 26", price: 99, weight: 500 },
  { id: 27, name: "Item 27", price: 125, weight: 790 },
  { id: 28, name: "Item 28", price: 198, weight: 100 },
  { id: 29, name: "Item 29", price: 220, weight: 340 },
  { id: 30, name: "Item 30", price: 249, weight: 800 },
  { id: 31, name: "Item 31", price: 230, weight: 200 },
  { id: 32, name: "Item 32", price: 190, weight: 20 },
  { id: 33, name: "Item 33", price: 45, weight: 700 },
  { id: 34, name: "Item 34", price: 12, weight: 10 },
  { id: 35, name: "Item 35", price: 5, weight: 20 },
  { id: 36, name: "Item 36", price: 2, weight: 200 },
  { id: 37, name: "Item 37", price: 90, weight: 200 },
  { id: 38, name: "Item 38", price: 12, weight: 20 },
  { id: 39, name: "Item 39", price: 167, weight: 300 },
  { id: 40, name: "Item 40", price: 12, weight: 500 },
  { id: 41, name: "Item 41", price: 8, weight: 250 },
  { id: 42, name: "Item 42", price: 2, weight: 10 },
  { id: 43, name: "Item 43", price: 9, weight: 10 },
  { id: 44, name: "Item 44", price: 167, weight: 500 },
  { id: 45, name: "Item 45", price: 210, weight: 790 },
  { id: 46, name: "Item 46", price: 167, weight: 100 },
  { id: 47, name: "Item 47", price: 23, weight: 340 },
  { id: 48, name: "Item 48", price: 190, weight: 800 },
  { id: 49, name: "Item 49", price: 199, weight: 200 },
  { id: 50, name: "Item 50", price: 12, weight: 20 },
];

const OrderPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [packages, setPackages] = useState([]);

  const handlePlaceOrder = async () => {
    try {
      const data = await placeOrder(selectedItems);
      setPackages(data.packages);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  return (
    <div>
      <h1>Product List</h1>
      <ProductList items={items} handleCheckboxChange={handleCheckboxChange} />
      <button onClick={handlePlaceOrder}>Place Order</button>
      {packages.length > 0 && (
        <div>
          <h2>Order Packages</h2>
          {packages.map((pkg, index) => (
            <div key={index}>
              <h3>Package {index + 1}</h3>
              <p>Items: {pkg.items.map((item) => item.name).join(", ")}</p>
              <p>Total Weight: {pkg.totalWeight}g</p>
              <p>Total Price: ${pkg.totalPrice}</p>
              <p>Courier Cost: ${pkg.courierCost}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
