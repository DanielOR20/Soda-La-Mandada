import React from 'react';
import './CartSummary.css';

const CartSummary = ({ cartItems, onCheckout }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 1000;
  const total = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  return (
    <div className="cart-summary">
      <h3>Resumen del Pedido</h3>
      <div className="summary-line">
        <span>Subtotal:</span>
        <span>₡{subtotal.toLocaleString()}</span>
      </div>
      <div className="summary-line">
        <span>Envío / Delivery:</span>
        <span>₡{cartItems.length > 0 ? deliveryFee.toLocaleString() : 0}</span>
      </div>
      <hr />
      <div className="summary-total">
        <strong>Total a pagar:</strong>
        <strong>₡{total.toLocaleString()}</strong>
      </div>
      <button 
        className="btn-checkout" 
        disabled={cartItems.length === 0}
        onClick={onCheckout}
      >
        Confirmar y Enviar Pedido
      </button>
    </div>
  );
};

export default CartSummary;