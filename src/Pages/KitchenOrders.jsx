import React, { useState, useEffect } from 'react';
import { getOrders, updateOrderStatus } from '../Services/MenuServices';
import KitchenHeader from '../Components/Kitchen/KitchenHeader';
import KitchenOrderList from '../Components/Kitchen/KitchenOrderList';
import KitchenLogin from '../Components/Kitchen/KitchenLogin';

const KitchenOrders = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('soda_kitchen_auth') === 'true';
  });
  const [orders, setOrders] = useState([]);

  const loadOrders = () => {
    if (isAuthenticated) {
      const allOrders = getOrders();
      const kitchenOrders = allOrders.filter(o => o.status === 'Aceptado' || o.status === 'En Cocina');
      setOrders(kitchenOrders);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    loadOrders();
    const interval = setInterval(loadOrders, 3000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    sessionStorage.setItem('soda_kitchen_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('soda_kitchen_auth');
    setIsAuthenticated(false);
  };

  const handleFinishCooking = (id) => {
    const updated = updateOrderStatus(id, 'Listo');
    setOrders(updated.filter(o => o.status === 'Aceptado' || o.status === 'En Cocina'));
  };

  if (!isAuthenticated) {
    return <KitchenLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <KitchenHeader onLogout={handleLogout} />
      <KitchenOrderList orders={orders} onFinishCooking={handleFinishCooking} />
    </div>
  );
};

export default KitchenOrders;
