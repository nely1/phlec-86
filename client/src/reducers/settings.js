const settingsReducer = (userDetails = [], action) => {
  switch (action.type) {
    case "CHANGE_PROFILE":
      return action.data;
    default:
      return userDetails;
  }
};
export default settingsReducer;
