import React from 'react';
import './AdminOrderCard.css';

const AdminOrderCard = ({ order, onStatusChange }) => {
  return (
    <div className={`order-card status-${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="order-header">
        <span className="order-id">#{order.id}</span>
        <span className="order-time">⏰ {order.date}</span>
        <span className={`badge status-badge-${order.status.toLowerCase()}`}>{order.status}</span>
      </div>
      <div className="order-items">
        {order.items.map((item, idx) => (
          <div key={idx} className="order-item-row">
            <span>{item.quantity}x {item.name}</span>
            <span>₡{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
      </div>
      <div className="order-footer">
        <div className="order-total">
          <span>Total:</span>
          <strong>₡{order.total.toLocaleString()}</strong>
        </div>
        <div className="order-actions">
          {order.status === 'Pendiente' && (
            <>
              <button className="btn-accept" onClick={() => onStatusChange(order.id, 'Aceptado')}>
                ✅ Aceptar
              </button>
              <button className="btn-reject" onClick={() => onStatusChange(order.id, 'Rechazado')}>
                ❌ Rechazar
              </button>
            </>
          )}
          {order.status === 'Aceptado' && (
            <button className="btn-kitchen" onClick={() => onStatusChange(order.id, 'En Cocina')}>
              👨‍🍳 Enviar a Cocina
            </button>
          )}
          {order.status === 'En Cocina' && (
            <span className="info-text">En preparación por cocina...</span>
          )}
          {order.status === 'Listo' && (
            <span className="success-text">🎉 Pedido Entregado</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrderCard;
