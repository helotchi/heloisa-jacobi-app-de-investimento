export const USER_SESSION = 'USER_SESSION';
export const CHANGE_BALANCE = 'CHANGE_BALANCE';

export const userSession = (email) => ({ type: USER_SESSION, payload: email });
export const changeBalance = (balance) => ({ type: CHANGE_BALANCE, payload: balance });
