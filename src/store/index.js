import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user';
import stocksReducer from '../reducers/stocks';

const store = configureStore({
  reducer: {
    user: userReducer,
    stocks: stocksReducer,
  }
});

export default store;