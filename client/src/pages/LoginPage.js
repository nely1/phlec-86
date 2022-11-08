import "./LoginPage.css";

import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/login";

function LoginPage({ setLogin, loginState }) {
  const history = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginDetails = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
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
                placeholder="Enter Your Email"
                required
              ></input>
            </label>
            <label className="LoginPageInputBox">
              <p className="text1">Password: </p>
              <input
                className="LoginPageInputField"
                placeholder="Enter Your Password"
                type="password"
                name="password"
                required
              ></input>
            </label>
            <input
              className="LoginPageSubmitButton heading2"
              type="submit"
              value="Sign In"
            ></input>{" "}
          </form>
          <div className="LoginPageAlternatives">
            <div className="LoginPageAlternativesItem1 text1">
              <a href="/signUp">
                <p>Sign Up</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
