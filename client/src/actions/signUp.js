/* The following are the API for the sign in page, contains action calls for creating a new user */
import * as api from "../api/index.js";

export const signUpUser = (signUpDetails, history) => async (dispatch) => {
  try {
    const { data } = await api.signUpUser(signUpDetails);

    dispatch({ type: "SIGNUP", data });

    history("/login");
  } catch (error) {
    console.log(error.message);
  }
};
