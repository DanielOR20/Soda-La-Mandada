// KitchenPanel.jsx
// Pantalla principal de cocina: muestra los pedidos pendientes

import { useState, useEffect } from 'react';
import OrderCard from './OrderCard';
import { obtenerPedidos, marcarPedidoListo } from './pedidosService';

function KitchenPanel() {
  const [pedidos, setPedidos] = useState([]);

  // Al montar el componente, cargamos los pedidos guardados
  useEffect(() => {
    const pedidosGuardados = obtenerPedidos();
    setPedidos(pedidosGuardados);
  }, []);

  // Marca un pedido como listo en el servicio y lo quita de la vista
  const handleMarcarListo = (id) => {
    marcarPedidoListo(id);

    setPedidos((pedidosActuales) =>
      pedidosActuales.filter((pedido) => pedido.id !== id || pedido.estado !== 'pendiente')
    );
  };

  // Solo mostramos las tarjetas de los pedidos que siguen pendientes
  const pedidosPendientes = pedidos.filter((pedido) => pedido.estado === 'pendiente');

  return (
    <div className="kitchen-panel">
      {pedidosPendientes.length === 0 ? (
        <p className="kitchen-panel__empty">No hay pedidos en cola 🍳</p>
      ) : (
        pedidosPendientes.map((pedido) => (
          <OrderCard
            key={pedido.id}
            pedido={pedido}
            onMarcarListo={handleMarcarListo}
          />
        ))
      )}
    </div>
  );
}

export default KitchenPanel;