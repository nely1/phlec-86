/* The following are the API for the plan page, contains action calls for fetching, updating and deleting plans */
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
  } catch (error) {
    console.log(error);
  }
};

export const getPlanOne = (planId) => async (dispatch) => {
  try {
    const { data } = await api.getPlanOne(planId);
    dispatch({ type: "FETCH_ONE_PLAN", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePlan = (planId, plan) => async (dispatch) => {
  try {
    const { data } = await api.updatePlan(planId, plan);
    dispatch({ type: "UPDATE_ONE_PLAN", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePlan = (planId) => async (dispatch) => {
  try {
    const { data } = await api.deletePlan(planId);
    dispatch({ type: "DELETE_ONE_PLAN", payload: data });
  } catch (error) {
    console.log(error);
  }
};
