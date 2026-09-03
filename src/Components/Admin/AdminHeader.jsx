import React from 'react';
import './AdminHeader.css';

const AdminHeader = ({ onLogout }) => {
  return (
    <header className="admin-header">
      <div className="admin-header-title">
        <h1>Administración de Pedidos</h1>
        <p>Acepta o rechaza pedidos de los clientes en tiempo real.</p>
      </div>
      {onLogout && (
        <button className="btn-logout" onClick={onLogout}>
          Cerrar Sesión
        </button>
      )}
    </header>
  );
};

export default AdminHeader;
