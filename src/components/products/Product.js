import Button from "./Button";

const Product = ({ name, price, qty, updateQty }) => {
  return (
    <div className="bg-gray-600 flex w-full p-4 justify-between gap-4 my-4">
      <h3 className="text-white font-medium">{name}</h3>
      <p className="text-white font-medium">
        {price}
      </p>
      <Button qty={qty} updateQty={updateQty} productName={name} />
    </div>
  );
};

export default Product;
