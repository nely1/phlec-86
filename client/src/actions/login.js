import * as api from '../api';

export const loginUser = (loginDetails, history) => async (dispatch) => {
    try {
        const {data} = await api.loginUser(loginDetails.loginDetails);
        dispatch({ type: "LOGIN"});
        localStorage.setItem('profile', JSON.stringify({ ...data.result }));
        loginDetails.setLogin(true);
        
        // navigate to landing page
        history('/Home');

    } catch (error) {
        console.log(error);
        alert("Invalid password or email")
    }
}