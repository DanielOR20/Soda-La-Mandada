import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AppRouter from './Routes/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;