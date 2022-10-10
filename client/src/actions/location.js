import * as api from "../api";

export const getLocations = () => async (dispatch) => {
    try {
        const { data } = await api.getLocations();
        dispatch({ type: "FETCH_LOCATIONS", payload: data });
    } catch (error) {
        console.log(error);
    }
};
