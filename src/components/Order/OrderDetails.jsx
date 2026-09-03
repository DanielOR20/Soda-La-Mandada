// OrderDetails.jsx
// Muestra el detalle completo de un pedido específico

function OrderDetails({ pedido }) {
  const esPendiente = pedido.estado === 'pendiente';

  return (
    <div className="order-details">
      <div className="order-details__header">
        <h2 className="order-details__title">Detalle del Pedido #{pedido.id}</h2>
      </div>

      <h3 className="order-details__cliente">{pedido.nombreCliente}</h3>

      <ul className="order-details__list">
        {pedido.items.map((item, index) => (
          <li key={index} className="order-details__item">
            {item}
          </li>
        ))}
      </ul>

      <h4 className="order-details__total">Total: ₡{pedido.total}</h4>

      <span className={`badge ${esPendiente ? 'badge--pending' : 'badge--ready'}`}>
        {esPendiente ? 'Pendiente' : 'Listo'}
      </span>
    </div>
  );
}

export default OrderDetails;
