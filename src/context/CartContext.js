import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItemCart(newItem) {
    //verificar se item existe, e no caso add + 1;
    //se não existir no carrinho, add no carrinho
    //findIndex 0 || -1
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      //add quantidade

      let cartList = cart;

      cartList[indexItem].amount += 1;

      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);

      return;
    }

    //não existe item
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
  }

  return (
    <CartContext.Provider value={{ cart, addItemCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
