import React from "react";

const ProductList = ({ items, handleCheckboxChange }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(item)}
            />
            {item.name} - ${item.price} - {item.weight}g
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
