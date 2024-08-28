import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>
        <img
          src={product.img}
          alt={product.title}
          className={styles.modalImage}
        />
        <div className={styles.modalText}>
        
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <p>
            <strong>Preço:</strong> {product.price}
          </p>
        
          <button>Comprar</button>
        </div>
        <div className={styles.modalDetail}>
        <h2>Detalhes do produto</h2>
      </div>
      </div>
    </div>
  );
};

export default Modal;
