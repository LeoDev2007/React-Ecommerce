// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const CartContext = createContext();

// Função para converter preço para número
const convertPrice = (priceString) => {
  // Remove 'R$', substitui ',' por '.', e converte para número
  return parseFloat(priceString.replace('R$', '').replace(',', '.')) || 0;
};

// Provedor do contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = convertPrice(item.price);
      const itemQuantity = Number(item.quantity) || 1;
      return total + (itemPrice * itemQuantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);
