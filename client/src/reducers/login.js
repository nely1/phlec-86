/* The following are the login page reducers, contains state changes for logging in, signing out and signing up */
// Note: Reducer actions must have unique names across ALL reducers
const authReducer = (state = { loginDetails: null }, action) => {
  if (action.type === "LOGIN") {
    localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
    return {
      ...state,
      loginDetails: action.data,
      loading: false,
      errors: null,
    };
  } else if (action.type === "SIGNUP") {
    return {
      ...state,
      loginDetails: action?.data,
      loading: false,
      errors: null,
    };
  } else if (action.type === "LOGOUT") {
    localStorage.clear();

    return { ...state, loginDetails: null, loading: false, errors: null };
  }

  return state;
};

export default authReducer;
