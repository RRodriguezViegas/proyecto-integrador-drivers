import axios from 'axios';
import {
  ON_SEARCH,
  GET_DRIVERS,
  GET_DRIVERS_BY_ID,
  CLEAN_DETAIL,
  GET_TEAMS,
  POST_DRIVER,
  SET_CURRENT_PAGE,
  ORDER_CARDS,
} from './types';

export const onSearch = name => {
  const endpoint =
    'https://pi-drivers-backend.onrender.com/drivers?name=' + name;
  return async dispatch => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: ON_SEARCH,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDrivers = () => {
  const endpoint = 'https://pi-drivers-backend.onrender.com/drivers';
  return async dispatch => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_DRIVERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDriversById = id => {
  const endpoint = 'https://pi-drivers-backend.onrender.com/drivers/' + id;
  return async dispatch => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_DRIVERS_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTeams = () => {
  const endpoint = 'https://pi-drivers-backend.onrender.com/teams';
  return async dispatch => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_TEAMS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postDriver = driverData => {
  const endpoint = 'https://pi-drivers-backend.onrender.com/drivers';
  return async dispatch => {
    try {
      const { data } = await axios.post(endpoint, driverData);
      return dispatch({
        type: POST_DRIVER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const setCurrentPage = num => {
  return {
    type: SET_CURRENT_PAGE,
    payload: num,
  };
};

// export const orderCards = orden => {
//   return { type: ORDER_CARDS, payload: orden };
// };
