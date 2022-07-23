import { USER_SESSION } from '../actions';

const INITIAL_STATE = {
  codCliente: 0,
  email: '',
  name: '',
  balance: 0,
  investedStocks: 0,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_SESSION:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;