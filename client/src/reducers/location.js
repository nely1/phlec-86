const locationReducer = (location = [], action) => {
  switch (action.type) {
    case "CREATE_REVIEW": // This action unused, but might be used for reviews?
      return [...location, action.payload];
    case "FETCH_LOCATIONS":
      return action.payload;
    default:
      return location;
  }
};
export default locationReducer;
