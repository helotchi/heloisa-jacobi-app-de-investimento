import { USER_SESSION } from '../actions';
import { CHANGE_BALANCE } from '../actions';

const INITIAL_STATE = {
  codCliente: 0,
  email: '',
  name: '',
  balance: 50,
  investedStocks: 0,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_SESSION:
    return {
      ...state,
      email: action.payload,
    };
  case CHANGE_BALANCE:
    return {
      ...state,
      balance: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;