// src/routes/AppRoutes.jsx
// Configuración de rutas principales de la Soda La Mandada

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import KitchenPanel from '../pages/KitchenPanel';
import AdminPanel from '../pages/AdminPanel';

// Página de inicio simple con navegación a las dos secciones
function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Soda La Mandada</h1>
      <p className="home__subtitle">Bienvenido al sistema de pedidos</p>

      <div className="home__buttons">
        <Link to="/cocina" className="btn-primary">
          Ir a Cocina
        </Link>
        <Link to="/admin" className="btn-secondary">
          Ir a Administración
        </Link>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocina" element={<KitchenPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;