/* The following are the reducers for fetching location data */
// Note: Reducer actions must have unique names across ALL reducers
const locationReducer = (location = [], action) => {
  switch (action.type) {
    case "FETCH_LOCATIONS":
      return action.payload;
    case "CREATE_REVIEW":
      return [...location, action.payload];
    default:
      return location;
  }
};
export default locationReducer;
