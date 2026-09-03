import React, { useState, useEffect } from 'react';
import { getOrders, updateOrderStatus, deleteOrder } from '../Services/MenuServices';
import AdminHeader from '../Components/Admin/AdminHeader';
import AdminMetrics from '../Components/Admin/AdminMetrics';
import AdminOrderList from '../Components/Admin/AdminOrderList';
import AdminLogin from '../Components/Admin/AdminLogin';

const AdminOrders = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('soda_admin_auth') === 'true';
  });
  const [orders, setOrders] = useState([]);

  const loadOrders = () => {
    if (isAuthenticated) {
      setOrders(getOrders());
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    loadOrders();
    const interval = setInterval(loadOrders, 3000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    sessionStorage.setItem('soda_admin_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('soda_admin_auth');
    setIsAuthenticated(false);
  };

  const handleStatusChange = (id, status) => {
    const updated = updateOrderStatus(id, status);
    setOrders(updated);
  };

  const handleDeleteOrder = (id) => {
    const updated = deleteOrder(id);
    setOrders(updated);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <AdminHeader onLogout={handleLogout} />
      <AdminMetrics orders={orders} />
      <AdminOrderList 
        orders={orders} 
        onStatusChange={handleStatusChange} 
        onDeleteOrder={handleDeleteOrder}
      />
    </div>
  );
};

export default AdminOrders;
