import { ON_SEARCH } from './types';

const initialState = { drivers: [] };

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_SEARCH:
      return {
        ...state,
        drivers: [...state.drivers, payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
