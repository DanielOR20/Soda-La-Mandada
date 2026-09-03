import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './CartSection.css';

const CartSection = ({ cart, onUpdateQuantity, onRemoveFromCart, onCheckout }) => {
  return (
    <aside className="cart-section">
      <h2>Tu Pedido</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-text">Tu carrito está vacío. ¡Agrega algo rico!</p>
      ) : (
        <div className="cart-items-list">
          {cart.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              onUpdateQuantity={onUpdateQuantity} 
              onRemove={onRemoveFromCart} 
            />
          ))}
        </div>
      )}
      <CartSummary cartItems={cart} onCheckout={onCheckout} />
    </aside>
  );
};

export default CartSection;
