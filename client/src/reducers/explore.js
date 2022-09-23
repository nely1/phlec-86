const exploreReducer = (review = [], action) => {
    switch (action.type) {
        case "CREATE_REVIEW":
            return [...review, action.payload];
        case "FETCH_REVIEWS":
            console.log(action.payload);
            return action.payload;
        default:
            return review;
    }
};
export default exploreReducer;
