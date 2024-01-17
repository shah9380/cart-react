import React, { useState } from 'react';
import ProductContainer from './components/products/ProductContainer';
import CartContainer from './components/cart/CartContainer';
import Products from './components/Products.json';

function App() {
  const [products, setProducts] = useState(Products);
  const [cart, setCart] = useState([]);

  const updateQty = (productName, quantityChange) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === productName
          ? { ...product, qty: Math.max(product.qty + quantityChange, 0) }
          : product
      )
    );

    setCart((prevCart) => {
      const existingCartItem = prevCart.find((item) => item.name === productName);

      if (existingCartItem) {
        return prevCart.map((item) =>
          item.name === productName
            ? { ...item, qty: Math.max(item.qty + quantityChange, 0) }
            : item
        );
      } else if (quantityChange > 0) {
        const productToAdd = Products.find((product) => product.name === productName);
        return [...prevCart, { ...productToAdd, qty: 1 }];
      }

      return prevCart;
    });
  };

  return (
    <div className="App flex flex-col md:flex-row justify-center gap-12">
      <ProductContainer products={products} updateQty={updateQty} />
      <CartContainer cart={cart} />
    </div>
  );
}

export default App;
