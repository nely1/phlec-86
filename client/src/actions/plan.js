import * as api from "../api";

export const postPlan = (plan) => async (dispatch) => {
    try {
        const { data } = await api.createPlan(plan);
        dispatch({ type: "CREATE_PLAN", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getPlans = (userInfo) => async (dispatch) => {
    try {
        const { data } = await api.getPlans(userInfo.result._id);
        dispatch({ type: "FETCH_PLANS", payload: data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};