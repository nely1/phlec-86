import * as api from "../api";

export const postPlan = (plan) => async (dispatch) => {
    try {
        const { data } = await api.createPlan(plan);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getLandmarks = () => async (dispatch) => {
    try {
        const { data } = await api.getLandmarks();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error);
    }
};