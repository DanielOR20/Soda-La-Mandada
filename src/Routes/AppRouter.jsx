import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientMenu from '../Pages/ClientMenu';
import AdminOrders from '../Pages/AdminOrders';
import KitchenOrders from '../Pages/KitchenOrders';
import NotFound from '../Pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientMenu />} />
      <Route path="/menu" element={<ClientMenu />} />
      <Route path="/admin" element={<AdminOrders />} />
      <Route path="/cocina" element={<KitchenOrders />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
