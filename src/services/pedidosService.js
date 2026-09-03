// pedidosService.js
// Servicio de gestión de pedidos para "Soda La Mandada" usando localStorage

const STORAGE_KEY = 'pedidos_soda_mandada';

/**
 * Obtiene el arreglo de pedidos guardados en localStorage.
 * Si no hay datos previos, devuelve un arreglo vacío.
 */
export function obtenerPedidos() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error al leer pedidos de localStorage:', error);
    return [];
  }
}

/**
 * Guarda el arreglo de pedidos completo en localStorage.
 */
export function guardarPedidos(pedidos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos));
  } catch (error) {
    console.error('Error al guardar pedidos en localStorage:', error);
  }
}

/**
 * Agrega un nuevo pedido al arreglo existente y lo guarda.
 * Estructura esperada: { id, nombreCliente, items, total, estado: 'pendiente' }
 */
export function agregarPedido(nuevoPedido) {
  const pedidos = obtenerPedidos();

  // Aseguramos que el pedido tenga estado 'pendiente' si no viene definido
  const pedidoConEstado = {
    estado: 'pendiente',
    ...nuevoPedido,
  };

  pedidos.push(pedidoConEstado);
  guardarPedidos(pedidos);

  return pedidoConEstado;
}

/**
 * Busca un pedido por id y le cambia el estado a 'listo'.
 * Guarda el arreglo actualizado en localStorage.
 */
export function marcarPedidoListo(id) {
  const pedidos = obtenerPedidos();
  const index = pedidos.findIndex((pedido) => pedido.id === id);

  if (index === -1) {
    console.warn(`No se encontró un pedido con id: ${id}`);
    return null;
  }

  pedidos[index].estado = 'listo';
  guardarPedidos(pedidos);

  return pedidos[index];
}