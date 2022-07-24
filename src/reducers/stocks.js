import { LOAD_STOCKS } from '../actions';

const INITIAL_STATE = {
  stocks: [],
};

function stocksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_STOCKS:
    return {
      ...state,
      stocks: action.payload,
    };
  default:
    return state;
  }
}

export default stocksReducer;