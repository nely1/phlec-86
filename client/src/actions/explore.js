import * as api from "../api";

export const postReview = (review) => async (dispatch) => {
    try {
        const { data } = await api.postReview(review);
        dispatch({ type: "CREATE_REVIEW", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getReview = () => async (dispatch) => {
    try {
        const { data } = await api.getReview();
        dispatch({ type: "FETCH_REVIEWS", payload: data });
    } catch (error) {
        console.log(error);
    }
};

