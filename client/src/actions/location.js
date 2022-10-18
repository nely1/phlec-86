import * as api from "../api";

export const getLocations = () => async (dispatch) => {
    try {
        const { data } = await api.getLocations();
        dispatch({ type: "FETCH_LOCATIONS", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const postReview = (location) => async (dispatch) => {
    try {
        console.log("review.location._id = " + JSON.stringify(location._id));
        const data = JSON.stringify(location); //await api.postReview(location._id);
        console.log("data = " + data);
        dispatch({ type: "CREATE_REVIEW", payload: data });
    } catch (error) {
        console.log(error);
    }

}

