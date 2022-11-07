const settingsReducer = (userDetails = [], action) => {
  switch (action.type) {
    case "CHANGE_PROFILE":
      const details = { 
        result: {
          plans: action.data.result.plans, 
          userName: action.data.result.userName, 
          favourties: action.data.result.favourties, 
          _id: action.data.result._id,
        },
        token: action.token
      }
      localStorage.setItem("profile", JSON.stringify(details));
      return action.data.result;
    case "GET_USER_INFO":
      
      return action.payload;
    default:
      return userDetails;
  }
};
export default settingsReducer;
