/* The following are the API for the login page, contains action calls for authenticating users */
import * as api from "../api";

export const loginUser = (loginDetails, history) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(loginDetails.loginDetails);

    dispatch({ type: "LOGIN", data });
    loginDetails.setLogin(true);

    // Navigate to landing page
    history("/home");
  } catch (error) {
    console.log(error);
    alert("Invalid password or email");
  }
};
