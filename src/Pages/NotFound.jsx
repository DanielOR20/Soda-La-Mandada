import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>404 - Página No Encontrada</h1>
      <p style={{ margin: '1rem 0 2rem 0', color: '#64748b' }}>
        La ruta a la que intentas acceder no existe en Soda La Mandada.
      </p>
      <Link to="/" style={{
        background: '#ef4444',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Volver al Menú Principal
      </Link>
    </div>
  );
};

export default NotFound;
