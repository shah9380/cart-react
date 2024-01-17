import Product from "./Product";

const ProductContainer = ({ products, updateQty }) => {
  return (
    <section className="border-8 w-fit min-w-[300px] p-2 border-black">
      <h3 className="text-xl font-medium text-blue-500 text-center">Products</h3>
      {products.map((data) => (
        <Product
          key={data.name}
          name={data.name}
          qty={data.qty}
          price={data.price}
          updateQty={updateQty}
        />
      ))}
    </section>
  );
};

export default ProductContainer;
