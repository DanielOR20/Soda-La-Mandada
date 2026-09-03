import React from 'react';
import './Menuitem.css';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="menu-item-card">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-info">
        <span className="menu-item-category">{item.category}</span>
        <h3 className="menu-item-title">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        <div className="menu-item-footer">
          <span className="menu-item-price">₡{item.price.toLocaleString()}</span>
          <button 
            className="btn-add-cart" 
            onClick={() => onAddToCart(item)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;