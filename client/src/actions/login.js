import * as api from '../api';

export const loginUser = (loginDetails) => async (dispatch) => {
    try {
        const {data} = await api.loginUser(loginDetails);
        dispatch({ type: "LOGIN", payload: data});

    } catch (error) {
        console.log(error);
    }
}