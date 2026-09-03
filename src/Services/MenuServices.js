// Servicio para gestionar el menú y los pedidos en localStorage

const MOCK_MENU = [
  {
    id: 1,
    name: "Casado Tradicional",
    category: "Platos Fuertes",
    description: "Arroz, frijoles, plátano maduro, ensalada, huevo frito y carne a elegancia (Pollo o Bistec).",
    price: 3800,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Hamburguesa Soda Especial",
    category: "Comida Rápida",
    description: "Carne artesanal, queso de hoja melt, tocineta, lechuga, tomate y salsa de la casa.",
    price: 3200,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Empanada Arreglada",
    category: "Antojitos",
    description: "Empanada de maíz crujiente rellena de carne desmechada o queso, servida con repollo y salsas.",
    price: 1800,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Pinto con Todo",
    category: "Desayunos / Especiales",
    description: "Gallo pinto arreglado, queso turrialba a la plancha, natilla, plátano frito y huevo picado.",
    price: 3000,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    name: "Chifrijo de la Casa",
    category: "Especiales",
    description: "Capa de arroz, frijoles tiernos, chicharrón crujiente, pico de gallo fresco y aguacate.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60"
  },
  {
      id: 6,
      name: "Papas Supreme con Tocino y Queso",
      category: "Comida Rápida",
      price: 2600,
      description: "Porción de papas fritas bañadas en salsa de queso cheddar fundido y trocitos de tocino crujiente.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
    },
    {
      id: 7,
      name: "Hot Dog Gigante La Mandada",
      category: "Comida Rápida",
      price: 2200,
      description: "Salchicha jumbo, repollo tierno, papitas tostadas, queso derretido, salsa de tomate y mayonesa.",
      image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500"
    },
    {
      id: 8,
      name: "Dedos de Pollo con Papas",
      category: "Comida Rápida",
      price: 3100,
      description: "Tiras de pollo empanizadas y fritas acompañadas de papas y salsa honey mustard.",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500"
    },
  {
    id: 9,
    name: "Batido Natural en Leche o Agua",
    category: "Bebidas",
    description: "Maracuyá, Mora, Guanábana, Mango o Cas fresco.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=60"
  },
  {
      id: 10,
      name: "Tacos Ticos de Res (4 unidades)",
      category: "Comida Rápida",
      price: 2900,
      description: "Tacos dorados de tortilla de maíz rellenos de carne desmechada, ensalada de repollo y salsa rosada.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500"
    },
    {
      id: 11,
      name: "Nachos La Mandada con Queso y Guacamole",
      category: "Comida Rápida",
      price: 3400,
      description: "Tortillas de maíz crujientes con frijoles, queso fundido, jalapeños, pico de gallo y guacamole fresco.",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500"
    },
    {
      id: 12,
      name: "Chifrijo Tradicional",
      category: "Entradas",
      price: 3600,
      description: "Capa de arroz, frijoles tiernos, chicharrón crujiente, pico de gallo, aguacate y chips de tortilla.",
      image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500"
    },
    {
      id: 13,
      name: "Arroz con Pollo y Papas Fritas",
      category: "Platos Típicos",
      price: 3200,
      description: "Delicioso arroz con pollo al estilo de la soda, acompañado de papas fritas y ensalada fresca.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500"
    },
    {
      id: 14,
      name: "Batido de Fresa en Leche",
      category: "Bebidas",
      price: 1500,
      description: "Refrescante batido natural de fresas frescas preparado en leche.",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500"
    }
  
];




export const getMenuItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_MENU);
    }, 300);
  });
};

// Manejo de órdenes para sincronizar Cliente -> Admin -> Cocina
export const getOrders = () => {
  const orders = localStorage.getItem('soda_orders');
  return orders ? JSON.parse(orders) : [];
};

export const saveOrder = (newOrder) => {
  const currentOrders = getOrders();
  const orderWithMeta = {
    id: 'PED-' + Date.now().toString().slice(-4),
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: 'Pendiente', // Pendiente -> Aceptado / Rechazado -> En Cocina -> Listo
    ...newOrder
  };
  const updatedOrders = [orderWithMeta, ...currentOrders];
  localStorage.setItem('soda_orders', JSON.stringify(updatedOrders));
  return orderWithMeta;
};

export const updateOrderStatus = (orderId, newStatus) => {
  const currentOrders = getOrders();
  const updated = currentOrders.map(order => {
    if (order.id === orderId) {
      return { ...order, status: newStatus };
    }
    return order;
  });
  localStorage.setItem('soda_orders', JSON.stringify(updated));
  return updated;
};

export const deleteOrder = (orderId) => {
  const currentOrders = getOrders();
  const updated = currentOrders.filter(order => order.id !== orderId);
  localStorage.setItem('soda_orders', JSON.stringify(updated));
  return updated;
};

