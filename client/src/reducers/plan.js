const planReducer = (plan = [], action) => {
    switch (action.type) {
        case "DELETE_ONE":
            return plan.filter((plan) => plan._id !== action.payload);
        case "CREATE_PLAN":
            return [...plan, action.payload];
        case "FETCH_LANDMARKS": // Get all landmarks
            return action.payload;
        case "FETCH_ONE": // Get chosen plan
            return action.payload;
        case "UPDATE_ONE":
            return plan.map((singlePlan) => (singlePlan._id === action.payload._id ? action.payload : singlePlan));

            // Need get all plans 
        default:
            return plan;
    }
};
export default planReducer;