import Product from "./Product";

const CartContainer = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.qty * item.price, 0);
  };

  return (
    <section className="border-8 w-fit p-2 flex flex-col justify-between items-center border-black relative min-w-[300px] min-h-[40vh]">
      <div>
      <h3 className="text-xl font-medium text-blue-500 text-center">Cart</h3>
      {cart
        .filter((data) => data.qty > 0)
        .map((data) => (
          <Product
            key={data.name}
            name={data.name}
            qty={data.qty}
            price={data.price}
          />
        ))}
      </div>
      <div className="bg-gray-500 flex w-full bottom-0 justify-between p-4 my-4">
        <h3 className="text-white text-xl font-medium">Total</h3>
        <p className="text-white font-medium">{calculateTotal()}</p>
      </div>
    </section>
  );
};

export default CartContainer;
