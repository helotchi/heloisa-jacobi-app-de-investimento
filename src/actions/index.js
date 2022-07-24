export const USER_SESSION = 'USER_SESSION';
export const CHANGE_BALANCE = 'CHANGE_BALANCE';
export const LOAD_STOCKS = 'LOAD_STOCKS';

export const userSession = (email) => ({ type: USER_SESSION, payload: email });
export const changeBalance = (balance) => ({ type: CHANGE_BALANCE, payload: balance });
export const loadStocks = (array) => ({ type: LOAD_STOCKS, payload: array });
