const exploreReducer = (location = [], action) => {
  switch (action.type) {
    case "CREATE_REVIEW": // This action unused, but might be used for reviews?
      console.log("Reducing... ");
      console.log("action.payload = " + JSON.stringify(action.payload));
      return [...location, action.payload];
    case "FETCH_REVIEWS":
      console.log(action.payload);
      return action.payload;
    default:
      return location;
  }
};
export default exploreReducer;
