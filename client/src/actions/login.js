import * as api from "../api";

export const loginUser = (loginDetails, history) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(loginDetails.loginDetails);

        dispatch({ type: "LOGIN", data });
        loginDetails.setLogin(true);

        // navigate to landing page
        history("/home");
    } catch (error) {
        console.log(error);
        alert("Invalid password or email");
    }
};
