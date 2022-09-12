import * as api from '../api';

export const loginUser = (loginDetails, history) => async (dispatch) => {
    try {
        const {data} = await api.loginUser(loginDetails);
        dispatch({ type: "LOGIN"});
        
        // navigate to landing page
        history('/Home')

    } catch (error) {
        console.log(error);
    }
}