/* The following are the explore page reducers, contains state changes for fetching, updating reviews */
// Note: Reducer actions must have unique names across ALL reducers
const exploreReducer = (location = [], action) => {
  switch (action.type) {
    case "CREATE_REVIEW":
      return [...location, action.payload];
    case "FETCH_REVIEWS":
      return action.payload;
    default:
      return location;
  }
};
export default exploreReducer;
