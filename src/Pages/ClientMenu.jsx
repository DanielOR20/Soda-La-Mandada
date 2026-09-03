import React, { useState, useEffect } from 'react';
import { getMenuItems, saveOrder } from '../Services/MenuServices';
import SodaHeader from '../Components/Header/SodaHeader';
import OrderSuccessBanner from '../Components/Common/OrderSuccessBanner';
import MenuList from '../Components/Menu/Menulist';
import CartSection from '../Components/Cart/CartSection';

const ClientMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderSent, setOrderSent] = useState(false);
  const [lastOrderCode, setLastOrderCode] = useState('');

  useEffect(() => {
    getMenuItems()
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar el menú:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setOrderSent(false);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const newOrder = saveOrder({
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 1000
    });
    
    setLastOrderCode(newOrder.id);
    setOrderSent(true);
    setCart([]);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '3rem' }}>Cargando menú de Soda La Mandada...</div>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <SodaHeader />

      {orderSent && <OrderSuccessBanner orderCode={lastOrderCode} />}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        <main className="menu-section">
          <MenuList items={menuItems} onAddToCart={handleAddToCart} />
        </main>

        <CartSection 
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

export default ClientMenu;