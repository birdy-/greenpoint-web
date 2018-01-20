import { assoc } from 'ramda';
import { PORTFOLIO_RECEIVED } from './actions';

const initialState = {
  portfolio: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PORTFOLIO_RECEIVED: {
      console.log(action);
      return assoc('portfolio', action.payload, state);
    }
    default:
      return state;
  }
};
