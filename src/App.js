import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Login } />
    </div>
  );
}

export default App;
