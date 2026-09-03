import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AppRouter from './Routes/AppRouter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;