import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Stocks from './pages/Stocks';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Login } />
      <Route exact path="/myStocks" component={ Stocks } />
    </div>
  );
}

export default App;
