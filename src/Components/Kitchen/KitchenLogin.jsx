import React, { useState } from 'react';
import './KitchenLogin.css';

const KitchenLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const KITCHEN_USER = import.meta.env.VITE_KITCHEN_USER || 'cocina';
  const KITCHEN_PASS = import.meta.env.VITE_KITCHEN_PASS || 'cocina123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === KITCHEN_USER && password === KITCHEN_PASS) {
      setError('');
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña de cocina incorrectos.');
    }
  };

  return (
    <div className="kitchen-login-container">
      <div className="kitchen-login-header">
        <h2>Acceso a Cocina</h2>
        <p>Inicia sesión para ver las comandas en preparación.</p>
      </div>

      <form onSubmit={handleSubmit} className="kitchen-login-form">
        {error && <div className="login-error">{error}</div>}

        <div className="form-group">
          <label htmlFor="kitchen-username">Usuario:</label>
          <input 
            type="text" 
            id="kitchen-username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Ingresa tu usuario" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="kitchen-password">Contraseña:</label>
          <input 
            type="password" 
            id="kitchen-password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="••••••••" 
            required 
          />
        </div>

        <button type="submit" className="btn-kitchen-login">
          Entrar a Cocina
        </button>
      </form>

      <div className="hint-box">
        <p>Solo para personal de cocina autorizado</p>
      </div>
    </div>
  );
};

export default KitchenLogin;
