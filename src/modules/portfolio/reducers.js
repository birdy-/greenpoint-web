import { GET_PORTFOLIO } from './actions';

const initialState = {
  portfolio: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PORTFOLIO: {
      return state;
    }
    default:
      return state;
  }
};
