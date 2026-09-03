// Servicio para gestionar el menú y los pedidos en localStorage

const MOCK_MENU = [
  {
    id: 1,
    name: "Casado con Bistec en Salsa",
    category: "Casados",
    description: "Arroz blanco, frijoles tiernos, plátano maduro frito, ensalada verde, huevo frito y bistec de res bañadita en salsa criolla.",
    price: 3800,
    image: "https://imgs.search.brave.com/c1A1f_8qbgl68qFdmoWu19LmnNT9dOpf3JmkrLxL60A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc1L0Nhc2Fkb19j/b3N0YXJyaWNlbnNl/Mi5wbmc"
  },
  {
    id: 2,
    name: "Casado con Pollo a la Plancha",
    category: "Casados",
    description: "Pechuga de pollo a la plancha, acompañado de arroz, frijoles, plátano maduro, picadillo del día y ensalada de repollo.",
    price: 3600,
    image: "https://imgs.search.brave.com/QJZsxLcwyS4nFlVKYkOC5C7Qlx2fREbHmNwcH_UHYAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MWMvY2EvYjQvNzAv/Y2FzYWRvLWNvbi1w/ZWNodWdhLWRlLmpw/Zw"
  },
  {
    id: 3,
    name: "Gallo Pinto Especial con Todo",
    category: "Desayunos",
    description: "Gallo pinto tradicional costarricense, huevo picado o frito, natilla, queso Turrialba a la plancha, plátano frito y salchichón.",
    price: 3000,
    image: "https://imgs.search.brave.com/6JReOdPGhLRZtHX9B2NtZ00Uehbp1jXVtMJiTdfFVPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzM3LzExLzYz/LzM2MF9GXzE1Mzcx/MTYzMzhfMVloVDlZ/MDlCeE95VFVTNlRp/bFlkMVJ6eXFJelZE/TlkuanBn"
  },
  {
    id: 4,
    name: "Chifrijo La Mandada",
    category: "Especiales",
    description: "Capa de arroz blanco, frijoles cubaces tiernos, chicharrón de carne crujiente, pico de gallo fresco, aguacate y chips de tortilla.",
    price: 4200,
    image: "https://imgs.search.brave.com/wNy06CU8Swumu4BxXuyHSVLfMAbuzf2DxylDav1H0gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNlaXRlaWRlYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA3L1BPUlRB/REEtQ2hpZnJpam8x/LnBuZw"
  },
  {
    id: 5,
    name: "Gallo de Salchichón",
    category: "Gallos",
    description: "Tortilla de maíz palmeada a mano con salchichón tico a la plancha y ensalada de repollo con limón.",
    price: 1200,
    image: "https://imgs.search.brave.com/3KDIBCaJ1fX2DbLyO-lfUuNrJLQP6X0T7lp7oW9sr-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3J0/aXJpY2FzY2VudHJv/YW1lcmljYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDMvcmVjZXRhLXRv/cnRpcmljYXMtZ2Fs/bGl0b3MtZmFjaWxl/cy5wbmc"
  },
  {
    id: 6,
    name: "Gallo de Carne Desmechada",
    category: "Gallos",
    description: "Tortilla de maíz palmeada con jugosa carne de res desmechada arreglada y chimichurri tico.",
    price: 1500,
    image: "https://imgs.search.brave.com/ilPoSlrcC9u33MDK6eZIvRXxpUof13j6u61xhcMSWIk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXljb2xvbWJpYW5y/ZWNpcGVzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8x/MS9wYXRhY29uZXMt/Y29uLWNhcm5lLWRl/c21hY2hhZGEuanBn"
  },
  {
    id: 7,
    name: "Empanada Arreglada de Queso",
    category: "Antojitos",
    description: "Empanada de maíz crujiente rellena de queso fundido, servida arreglada con repollo, mayonesa y salsa de tomate.",
    price: 1800,
    image: "https://imgs.search.brave.com/KHhy4gO_GkoR6klk0qn756f6y4agWlF1kVWBLp3Y3Vs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YXF1/ZXJpYWVubGluZWEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA3L2VtcGFu/YWRhLWFycmVnbGFk/YW4tNjAweDYwMC5w/bmc"
  },
  {
    id: 8,
    name: "Hamburguesa Soda Especial",
    category: "Comida Rápida",
    description: "Carne de res artesanal, queso derretido, tocineta, lechuga, tomate, pepinillos y papas fritas.",
    price: 3200,
    image: "https://imgs.search.brave.com/b5Lut3bFthf-XEA9u5XaZEeZt0lk9Ch21zsltUEHJss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIw/MjE1MjgxL2VzL2Zv/dG8vdG9jaW5vLWhh/bWJ1cmd1ZXNhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0x/SjNtQ2d0RWhMajJ6/eVR6QkMyaXByQkRh/STJ5amcwWjBnT3VG/WVh0LW9FPQ"
  },
  {
    id: 9,
    name: "Papas Supreme con Queso y Tocino",
    category: "Comida Rápida",
    description: "Porción generosa de papas fritas bañadas en salsa de queso cheddar fundido y trocitos de tocino crujiente.",
    price: 2600,
    image: "https://imgs.search.brave.com/WJnL7r-lICgzRm6IjfpZxjCGDyssTnskjbAc1PbkU-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21l/ZGVyYS5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzkv/MjAyMi8xMS9wYXBh/cy1mcml0YXMtY29u/LXF1ZXNvLWNoZWRk/YXItUEdfUEZDUUNZ/MzAzMjAwMDIuanBn/P2ZpdD03MjAsNDgw/JmNyb3A9MHB4LDM4/cHgsNzIwcHgsNDA0/cHg"
  },
  {
    id: 10,
    name: "Batido Natural de Cas en Agua o Leche",
    category: "Bebidas",
    description: "Refrescante batido de fruto de cas costarricense fresco, preparado en agua o leche a elección.",
    price: 1500,
    image: "https://imgs.search.brave.com/ePj0m2MdAPj0zRG0gl8Ia2QDVcwdmgro6C8PXNdQHSg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9nZXR0/eWltYWdlcy05NjEx/MDg2NTgtMTY1NjM0/MjEyNi5qcGc_cmVz/aXplPTk4MDoq"
  },
  {
    id: 11,
    name: "Batido Natural de Fresa en Leche",
    category: "Bebidas",
    description: "Batido cremoso de fresas naturales licuadas en leche fría.",
    price: 1500,
    image: "https://imgs.search.brave.com/5fTw83JUtZoeCMQr27l4xhzZwLI8FON-xG_tOYbiI5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbm1p/Y29jaW5hLmNvbS9f/bmV4dC9pbWFnZT91/cmw9L2FwaS9tZWRp/YS9maWxlL2JhdGlk/by1kZS1mcmVzYS15/LWxlY2hlLmpwZyZ3/PTM4NDAmcT02MA"
  },
  {
    id: 12,
    name: "Pastel de Tres Leches",
    category: "Repostería",
    description: "Postre tradicional bañado en mezcla de tres leches con cobertura de chantilly y canela.",
    price: 2000,
    image: "https://imgs.search.brave.com/C76rhpa6FhhI8ds4GlbCeYo5u7WBzKLEpmQFCaauVjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXNz/ZXJ0Z2FsbGVyeS5j/b20vY2RuL3Nob3Av/ZmlsZXMvVHJlc19M/ZWNoZXNfU2xpY2Ut/bWVkaXVtX2RiODNi/MzU2LTY1MjAtNDUx/Yy1hZmQ0LTgyMzEx/M2YzN2JmYS5qcGc_/dj0xNzI1OTk3OTc2/JndpZHRoPTEwODA"
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
    status: 'Pendiente',
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
