import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    // Here you can create an order object using the cartItems and any additional information you may need
    const order = {
      items: cartItems,
      // Add any other relevant order details like user ID, timestamp, etc.
    };

    // Add the order to the orders array
    setOrders((prevOrders) => [...prevOrders, order]);

    // Clear the cart after placing the order
    clearCart();
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, orders, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};
