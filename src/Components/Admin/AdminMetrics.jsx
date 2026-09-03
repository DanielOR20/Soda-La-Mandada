import React from 'react';
import './AdminMetrics.css';

const AdminMetrics = ({ orders }) => {
  const validOrders = orders.filter(o => o.status !== 'Rechazado');
  const totalRevenue = validOrders.reduce((sum, order) => sum + (order.total || 0), 0);
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter(o => o.status === 'Pendiente' || o.status === 'En Cocina' || o.status === 'Aceptado').length;
  const avgOrderValue = validOrders.length > 0 ? Math.round(totalRevenue / validOrders.length) : 0;

  return (
    <div className="admin-metrics-container">
      <div className="metric-card revenue">
        <div className="metric-info">
          <span className="metric-label">Ingresos del Día</span>
          <span className="metric-value">₡{totalRevenue.toLocaleString()}</span>
        </div>
      </div>

      <div className="metric-card orders">
        <div className="metric-info">
          <span className="metric-label">Total Pedidos</span>
          <span className="metric-value">{totalOrdersCount}</span>
        </div>
      </div>

      <div className="metric-card active">
        <div className="metric-info">
          <span className="metric-label">Pedidos en Proceso</span>
          <span className="metric-value">{pendingOrdersCount}</span>
        </div>
      </div>

      <div className="metric-card average">
        <div className="metric-info">
          <span className="metric-label">Ticket Promedio</span>
          <span className="metric-value">₡{avgOrderValue.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminMetrics;
