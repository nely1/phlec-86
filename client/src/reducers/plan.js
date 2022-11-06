const planReducer = (plan = [], action) => {
  switch (action.type) {
    case "DELETE_ONE_PLAN":
      return action.payload;
    case "CREATE_PLAN":
      return action.payload;
    case "FETCH_PLANS":
      return action.payload;
    case "FETCH_ONE_PLAN":
      return action.payload;
    case "UPDATE_ONE_PLAN":
      return action.payload;
    default:
      return plan;
  }
};
export default planReducer;
