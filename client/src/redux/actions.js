import axios from "axios";
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
  FILTER_BY_TEAM,
  FILTER_BY_ORIGIN,
} from "./types";

export const onSearch = name => {
  const endpoint =
    "https://pi-drivers-backend.onrender.com/drivers?name=" + name;
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
  const endpoint = "https://pi-drivers-backend.onrender.com/drivers";
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
  const endpoint = "https://pi-drivers-backend.onrender.com/drivers/" + id;
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
  const endpoint = "https://pi-drivers-backend.onrender.com/teams";
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
  const endpoint = "https://pi-drivers-backend.onrender.com/drivers";
  return async dispatch => {
    try {
      const { data } = await axios.post(endpoint, driverData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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

export const orderCards = (orden, driversHome) => {
  let orderedDrivers = driversHome;
  if (orden === "A") {
    orderedDrivers.sort(function (a, b) {
      const nameA = a.name.forename ? a.name.forename : a.name;
      const nameB = b.name.forename ? b.name.forename : b.name;

      const normalizedNameA = nameA
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "e");
      const normalizedNameB = nameB
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "e");

      if (normalizedNameA < normalizedNameB) {
        return -1;
      }
      if (normalizedNameA > normalizedNameB) {
        return 1;
      }

      return 0;
    });
  } else if (orden === "D") {
    orderedDrivers.sort(function (a, b) {
      const nameA = a.name.forename ? a.name.forename : a.name;
      const nameB = b.name.forename ? b.name.forename : b.name;

      const normalizedNameA = nameA
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "e");
      const normalizedNameB = nameB
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "e");

      if (normalizedNameA > normalizedNameB) {
        return -1;
      }
      if (normalizedNameA < normalizedNameB) {
        return 1;
      }
      return 0;
    });
  } else if (orden === "N") {
    orderedDrivers.sort(function (a, b) {
      if (a.dob > b.dob) {
        return -1;
      }
      if (a.dob < b.dob) {
        return 1;
      }
      return 0;
    });
  }
  return { type: ORDER_CARDS, payload: orderedDrivers };
};

export const filterByTeam = (value, driversHome) => {
  let filteredDriversFromApi = driversHome.filter(
    e => e && e.teams && e.teams.includes(value)
  );

  let filteredDriversFromDB = driversHome.filter(
    e => e && e.Teams && e.Teams.some(team => team.nombre === value)
  );

  let filteredDrivers = [...filteredDriversFromDB, ...filteredDriversFromApi];

  return { type: FILTER_BY_TEAM, payload: filteredDrivers };
};

export const filterByOrigin = (value, driversHome) => {
  let filteredDrivers;
  if (value === "API") {
    filteredDrivers = driversHome.filter(e => e.id < 999);
  } else {
    filteredDrivers = driversHome.filter(e => !(e.id < 999));
  }
  return { type: FILTER_BY_ORIGIN, payload: filteredDrivers };
};

export const deleteDriver = id => {
  const endpoint = "https://pi-drivers-backend.onrender.com/drivers/" + id;
  return async dispatch => {
    try {
      await axios.delete(endpoint);
      return dispatch({
        type: DELETE_DRIVER,
        payload: "Driver deleted",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
