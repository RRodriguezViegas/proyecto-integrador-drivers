import {
  ON_SEARCH,
  GET_DRIVERS,
  GET_DRIVERS_BY_ID,
  CLEAN_DETAIL,
  GET_TEAMS,
  POST_DRIVER,
} from './types';

const initialState = { drivers: [], driverDetail: [], teams: [] };

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: [...state.drivers, payload],
      };

    case ON_SEARCH:
      return {
        ...state,
        drivers: [...state.drivers, payload],
      };

    case GET_DRIVERS_BY_ID:
      return {
        ...state,
        driverDetail: payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        driverDetail: {},
      };

    case GET_TEAMS:
      return {
        ...state,
        teams: payload,
      };

    case POST_DRIVER:
      return {
        state,
      };

    default:
      return state;
  }
};

export default rootReducer;
