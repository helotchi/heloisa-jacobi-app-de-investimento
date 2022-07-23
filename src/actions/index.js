export const USER_SESSION = 'USER_SESSION';

export const userSession = (email) => ({ type: USER_SESSION, payload: email });
