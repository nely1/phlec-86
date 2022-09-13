import * as api from '../api/index.js';

export const signUpUser = (signUpDetails, history) => async (dispatch) => {
    try {
        const {data} = await api.signUpUser(signUpDetails);

        dispatch({type: "SIGNUP", data});

        history.push('/Login');
    }

    catch (error) {
        console.log(error.message);
    }
}