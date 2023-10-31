import {
  ON_SEARCH,
  GET_DRIVERS,
  GET_DRIVERS_BY_ID,
  CLEAN_DETAIL,
  GET_TEAMS,
  POST_DRIVER,
  SET_CURRENT_PAGE,
  ORDER_CARDS,
  DELETE_DRIVER,
} from './types';

const initialState = {
  drivers: [],
  driverDetail: [],
  teams: [],
  currentPage: 1,
};

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
        drivers: [payload],
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
        drivers: [...state.drivers, payload],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    case ORDER_CARDS:
      return {
        ...state,
        drivers: [payload],
      };

    case DELETE_DRIVER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
