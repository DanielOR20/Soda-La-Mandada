import React from 'react';
import AdminOrderCard from './AdminOrderCard';
import './AdminOrderList.css';

const AdminOrderList = ({ orders, onStatusChange }) => {
  if (!orders || orders.length === 0) {
    return <div className="empty-orders">No hay pedidos registrados en este momento.</div>;
  }

  return (
    <div className="orders-grid">
      {orders.map((order) => (
        <AdminOrderCard 
          key={order.id} 
          order={order} 
          onStatusChange={onStatusChange} 
        />
      ))}
    </div>
  );
};

export default AdminOrderList;
