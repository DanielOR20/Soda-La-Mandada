// OrderCard.jsx
// Tarjeta visual de un pedido para la vista de cocina

function OrderCard({ pedido, onMarcarListo }) {
  const esPendiente = pedido.estado === 'pendiente';

  return (
    <div className={`order-card ${esPendiente ? 'order-card--pending' : 'order-card--ready'}`}>
      <h3 className="order-card__title">{pedido.nombreCliente}</h3>

      <p className="order-card__total">Total: ₡{pedido.total}</p>

      <ul className="order-card__items">
        {pedido.items.map((item, index) => (
          <li key={index} className="order-card__item">
            {item}
          </li>
        ))}
      </ul>

      {esPendiente && (
        <button
          className="btn-success"
          onClick={() => onMarcarListo(pedido.id)}
        >
          Marcar como Listo
        </button>
      )}
    </div>
  );
}

export default OrderCard;