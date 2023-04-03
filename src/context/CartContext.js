import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItemCart(newItem) {
    //verificar se item existe, e no caso add + 1;
    //se não existir no carrinho, add no carrinho
    //findIndex 0 || -1
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    //findIndex
    //se ele não acha o elemento, ele retorna -1
    //porém se ele acha o elemento, ele retorna a posição
    //do elemento no array.

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

  function removeItemCart(product) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;
      setCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
  }

  return (
    <CartContext.Provider value={{ cart, addItemCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
