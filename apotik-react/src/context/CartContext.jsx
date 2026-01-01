import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (produk) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === produk.id);
      if (exist) {
        return prev.map(p =>
          p.id === produk.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...produk, qty: 1 }];
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
