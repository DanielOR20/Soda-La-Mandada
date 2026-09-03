import React from 'react';
import './KitchenComandaCard.css';

const KitchenComandaCard = ({ order, onFinishCooking }) => {
  return (
    <div className="kitchen-card">
      <div className="kitchen-card-header">
        <h3>Comanda #{order.id}</h3>
        <span className="order-time">{order.date}</span>
      </div>
      <ul className="kitchen-items-list">
        {order.items.map((item, index) => (
          <li key={index} className="kitchen-item">
            <span className="item-qty">{item.quantity}x</span>
            <span className="item-name">{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="kitchen-card-footer">
        <button className="btn-ready" onClick={() => onFinishCooking(order.id)}>
          ¡Pedido Listo!
        </button>
      </div>
    </div>
  );
};

export default KitchenComandaCard;
