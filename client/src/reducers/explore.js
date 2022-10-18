const exploreReducer = (review = [], action) => {
    switch (action.type) {
        case "CREATE_REVIEW":
            console.log("Reducing... ");
            console.log("action.payload = " + JSON.stringify(action.payload));
            console.log("... review =" + JSON.stringify([...review]));
            return action.payload;
        case "FETCH_REVIEWS":
            console.log(action.payload);
            return action.payload;
        default:
            return review;
    }
};
export default exploreReducer;
