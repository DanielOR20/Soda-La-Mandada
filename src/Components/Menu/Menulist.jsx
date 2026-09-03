import React from 'react';
import MenuItem from './MenuItem';
import './MenuList.css';

const MenuList = ({ items, onAddToCart }) => {
  if (!items || items.length === 0) {
    return <p className="no-menu-items">No hay platillos disponibles en este momento.</p>;
  }

  return (
    <div className="menu-list-grid">
      {items.map((item) => (
        <MenuItem 
          key={item.id} 
          item={item} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  );
};

export default MenuList;