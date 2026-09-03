import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Credenciales por defecto para el MVP de la Soda
    if (username.trim() === 'admin' && password === 'soda123') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-header">
        <h2>🔒 Acceso Administrador</h2>
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
            placeholder="Ej: admin" 
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
        <p>Solo para administradores</p>
      </div>
    </div>
  );
};

export default AdminLogin;
