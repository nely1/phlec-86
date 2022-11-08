/* The following are the API for the location page, contains action calls for fetching location data and its reviews */
import * as api from "../api";

export const getLocations = () => async (dispatch) => {
  try {
    const { data } = await api.getLocations();
    dispatch({ type: "FETCH_LOCATIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postReview = (id, location) => async (dispatch) => {
  try {
    const data = await api.postReview(id, location);
    dispatch({ type: "CREATE_REVIEW", payload: data });
  } catch (error) {
    console.log(error);
  }
};
