import React from 'react';
import KitchenComandaCard from './KitchenComandaCard';
import './KitchenOrderList.css';

const KitchenOrderList = ({ orders, onFinishCooking }) => {
  if (!orders || orders.length === 0) {
    return (
      <div className="empty-kitchen">
        <p>No hay comandas pendientes de cocina por ahora.</p>
      </div>
    );
  }

  return (
    <div className="kitchen-grid">
      {orders.map((order) => (
        <KitchenComandaCard 
          key={order.id} 
          order={order} 
          onFinishCooking={onFinishCooking} 
        />
      ))}
    </div>
  );
};

export default KitchenOrderList;
