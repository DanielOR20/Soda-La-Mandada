import React from 'react';
import './KitchenHeader.css';

const KitchenHeader = ({ onLogout }) => {
  return (
    <header className="kitchen-header">
      <div className="kitchen-header-title">
        <h1>👨‍🍳 Pantalla de Cocina</h1>
        <p>Ordenes en preparación para entrega rápida.</p>
      </div>
      {onLogout && (
        <button className="btn-kitchen-logout" onClick={onLogout}>
          🔒 Cerrar Sesión
        </button>
      )}
    </header>
  );
};

export default KitchenHeader;
