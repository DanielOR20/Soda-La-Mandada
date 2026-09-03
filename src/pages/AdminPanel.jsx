// AdminPanel.jsx
// Panel de administración: muestra TODOS los pedidos y el resumen de ventas del día

import { useState, useEffect } from 'react';
import OrderCard from "../components/Order/OrderCard";
import { obtenerPedidos, marcarPedidoListo } from "../services/pedidosService";

function AdminPanel() {
  const [pedidos, setPedidos] = useState([]);

  // Al montar el componente, cargamos todos los pedidos guardados
  useEffect(() => {
    const pedidosGuardados = obtenerPedidos();
    setPedidos(pedidosGuardados);
  }, []);

  // Calculamos el total de ventas sumando solo los pedidos con estado 'listo'
  const totalVentas = pedidos
    .filter((pedido) => pedido.estado === 'listo')
    .reduce((suma, pedido) => suma + pedido.total, 0);

  return (
    <div className="admin-panel">
      <div className="admin-panel__resumen">
        <p className="admin-panel__total-ventas">
          Total de ventas del día: ₡{totalVentas}
        </p>
      </div>

      <div className="admin-panel__pedidos">
        {pedidos.length === 0 ? (
          <p className="admin-panel__empty">No hay pedidos registrados</p>
        ) : (
          pedidos.map((pedido) => (
            <OrderCard
              key={pedido.id}
              pedido={pedido}
              onMarcarListo={() => {}}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default AdminPanel;