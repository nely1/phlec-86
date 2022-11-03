const settingsReducer = (userDetails = [], action) => {
  switch (action.type) {
    case "CHANGE_PROFILE":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return action.data;
    default:
      return userDetails;
  }
};
export default settingsReducer;
