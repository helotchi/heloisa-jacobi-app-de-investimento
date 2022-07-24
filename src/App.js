import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import MyStocks from './pages/MyStocks';
import './services/server';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Login } />
      <Route exact path="/myStocks" component={ MyStocks } />
    </div>
  );
}

export default App;
