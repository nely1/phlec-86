/* The following are the API for the explore page, contains action calls for fetching reviews */
import * as api from "../api";

export const getReview = () => async (dispatch) => {
  try {
    const { data } = await api.getReview();
    dispatch({ type: "FETCH_REVIEWS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
