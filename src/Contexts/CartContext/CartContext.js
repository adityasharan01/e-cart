import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).userCart : []);
  }, []);

  return <CartContext.Provider value={{ cart, setCart }}>{props.children}</CartContext.Provider>;
};