import * as api from "../api/index.js";

export const changeProfile =
  (userDetails, userInfo, history) => async (dispatch) => {
    try {
      const { data } = await api.updateUserInfo(
        userInfo.result._id,
        userDetails
      );
      dispatch({ type: "CHANGE_PROFILE", data });

      history("/settings");
    } catch (error) {
      console.log(error.message);
      alert("Email already exists");
    }
  };

export const getUserInfo = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getUserInfo(userId);

    dispatch({ type: "GET_USER_INFO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
