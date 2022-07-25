import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MyStocks from './pages/MyStocks';
import StockMarket from './pages/StockMarket';
import Draw from './pages/Draw';
import Deposit from './pages/Deposit';
import BuyStock from './pages/BuyStock';
import SellStock from './pages/SellStock';
import './services/server';

function App() {
  return (
    <div className='lg:max-h-screen lg:flex items-center place-content-center p-80'>
      <div className='grid justify-items-center bg-alice shadow-xl rounded-xl p-10 w-2/3'>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/myStocks" component={ MyStocks } />
          <Route exact path="/stockMarket" component={ StockMarket } />
          <Route exact path="/draw" component={ Draw } />
          <Route exact path="/deposit" component={ Deposit } />
          <Route exact path="/buyStock/:stockId" component={ BuyStock } />
          <Route exact path="/sellStock" component={ SellStock } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
