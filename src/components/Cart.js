// src/components/Cart.js
import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  const formatPrice = (price) => {
    return price.toFixed(2); // Formata o preço com 2 casas decimais
  };

  return (
    
    
    <div className={styles.cartContainer}>
      {cart.length === 0 ? (
        <p>Seu Carrinho está vazio!</p>
      ) : (
        cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onQuantityChange={updateQuantity}
          />
        ))
      )}
      <div className={styles.cartTotal}>
        <h3>Total: R${formatPrice(getTotal())}</h3>
      </div>
    </div>
  
  );
};

export default Cart;
