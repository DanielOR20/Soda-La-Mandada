import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const ADMIN_USER = import.meta.env.VITE_ADMIN_USER || 'admin';
  const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS || 'soda123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
      setError('');
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-header">
        <h2>Acceso Administrador</h2>
        <p>Inicia sesión para gestionar los pedidos de la soda.</p>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="login-error">{error}</div>}

        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Ingresa tu usuario" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="••••••••" 
            required 
          />
        </div>

        <button type="submit" className="btn-login">
          Ingresar al Panel
        </button>
      </form>

      <div className="hint-box">
        <p>Solo para administradores autorizados</p>
      </div>
    </div>
  );
};

export default AdminLogin;
