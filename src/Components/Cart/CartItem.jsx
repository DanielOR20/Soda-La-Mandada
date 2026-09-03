import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <span className="cart-item-price">₡{item.price.toLocaleString()}</span>
      </div>
      <div className="cart-item-actions">
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button 
          className="btn-remove" 
          onClick={() => onRemove(item.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;