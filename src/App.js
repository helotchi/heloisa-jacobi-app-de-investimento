import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MyStocks from './pages/MyStocks';
import Draw from './pages/Draw';
import Deposit from './pages/Deposit';
import './services/server';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/myStocks" component={ MyStocks } />
        <Route exact path="/draw" component={ Draw } />
        <Route exact path="/deposit" component={ Deposit } />
      </Switch>
    </div>
  );
}

export default App;
