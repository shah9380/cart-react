import React from "react";

const Product = ({ name, qty, price }) => {
  return (
    <div className="bg-gray-600 flex w-full p-4 gap-24 my-4">
      <h3 className="text-white font-medium">{name}</h3>
      <p className="text-white font-medium">
        {qty} x {price}
      </p>
    </div>
  );
};

export default Product;
