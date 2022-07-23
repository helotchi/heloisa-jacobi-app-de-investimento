export const USER_SESSION = 'USER_SESSION';

export const userEmailSession = (email) => ({ type: USER_SESSION, payload: email });
