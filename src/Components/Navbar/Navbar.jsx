import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          🍔 Soda La Mandada
        </NavLink>
        <div className="navbar-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            🍽️ Menú Cliente
          </NavLink>
          <NavLink 
            to="/admin" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🔒 Admin Pedidos
          </NavLink>
          <NavLink 
            to="/cocina" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🔒 Cocina
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
