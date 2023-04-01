import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
