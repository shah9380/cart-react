import { useState } from "react";

const Button = ({ qty, updateQty, productName }) => {
  let [localQty, setLocalQty] = useState(qty);

  const handleClick = (quantityChange) => {
    updateQty(productName, quantityChange);
    setLocalQty((prevQty) => Math.max(prevQty + quantityChange, 0));
  };

  return (
    <div className="border w-fit bg-sky-600 flex gap-6 px-2 justify-center items-center">
      <button onClick={() => handleClick(-1)} className="text-xl font-bold">
        -
      </button>
      <span>{localQty}</span>
      <button onClick={() => handleClick(1)} className="text-xl font-bold">
        +
      </button>
    </div>
  );
};

export default Button;
