// src/components/CartItem.js
import React from 'react';
import styles from './CartItem.module.css';
import { IoTrash } from 'react-icons/io5';

// Função para converter preço para número
const convertPrice = (priceString) => {
  return parseFloat(priceString.replace('R$', '').replace(',', '.')) || 0;
};

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const price = convertPrice(item.price);
  const quantity = Number(item.quantity) || 1;
  const subtotal = price * quantity;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      onQuantityChange(item.id, newQuantity);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImg}>
        <img src={item.img} alt={item.title} />
      </div>
      <div className={styles.cartItemDetails}>
        <h3>{item.title}</h3>
        <p>Preço: R${price.toFixed(2)}</p>
        <p>Subtotal: R${subtotal.toFixed(2)}</p>
        <div className={styles.quantityControl}>
          <label>
            Quantidade:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </label>
        </div>
        <button onClick={() => onRemove(item.id)} className={styles.removeButton}>
          <IoTrash /> Remover
        </button>
      </div>
    </div>
  );
};

export default CartItem;
