import React from 'react';
import './OrderSuccessBanner.css';

const OrderSuccessBanner = ({ orderCode }) => {
  return (
    <div className="order-success-banner">
      ¡Pedido <strong>#{orderCode}</strong> enviado con éxito a la cocina y administración!
    </div>
  );
};

export default OrderSuccessBanner;
