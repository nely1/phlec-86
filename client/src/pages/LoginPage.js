import "./LoginPage.css";

import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/login";

function LoginPage({ setLogin, loginState }) {
    // React States

    const history = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        console.log(loginState);

        dispatch(loginUser({ loginDetails, setLogin }, history));
    };

    return (
        <>
            <div data-testid="Loginpage" className="LoginPage">
                <div className="LoginPageBox">
                    <h1 className="LoginPageTitle">Sign in to Phlec Travels</h1>
                    <form className="loginPageForm" onSubmit={handleSubmit}>
                        <label className="LoginPageInputBox">
                            <p className="text1">Email Address: </p>
                            <input
                                className="LoginPageInputField"
                                type="text"
                                name="email"
                                value={loginDetails.email}
                                onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
                            ></input>
                        </label>
                        <label className="LoginPageInputBox">
                            <p className="text1">Password: </p>
                            <input
                                className="LoginPageInputField"
                                type="password"
                                name="password"
                                value={loginDetails.password}
                                onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
                            ></input>
                        </label>
                        <input className="LoginPageSubmitButton heading2" type="submit" value="Sign In"></input>{" "}
                        {/* Change this for auth?  */}
                    </form>
                </div>
                <div className="LoginPageAlternatives">
                    <div className="LoginPageAlternativesItem1 text1">
                        <a href="/SignUp">
                            <p>Sign Up</p>
                        </a>
                    </div>
                    <div className="LoginPageAlternativesItem2 text1">
                        <a href="/ResetPassword">
                            <p>Forgot Password</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
