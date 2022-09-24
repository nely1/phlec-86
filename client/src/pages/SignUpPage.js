import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import { useDispatch } from "react-redux";
import { signUpUser } from "../actions/signUp";

/* The layouts of the sign up page and the login page are similar, so these two pages can share 
some styles in styles.css */

function SignUpPage() {
    const history = useNavigate();
    const [signUpDetails, setSignUpDetails] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(signUpUser(signUpDetails, history));
    };

    return (
        <>
<<<<<<< Updated upstream
            <div className="SignUpPage">
                <div className="SignUpPageBox">
                    <h1 className="SignUpPageTitle">Create your account</h1>
                    <form className="SignUpPageForm" onSubmit={handleSubmit}>
                        <p className="text4">First Name </p>
                        <label className="SignUpPageInputBox">
                            <input
                                className="SignUpPageInputField"
                                type="text"
                                name="firstName"
                                value={signUpDetails.firstName}
                                onChange={(e) => setSignUpDetails({ ...signUpDetails, firstName: e.target.value })}
                            ></input>
                        </label>
                        <p className="text4">Last Name </p>
                        <label className="SignUpPageInputBox">
                            <input
                                className="SignUpPageInputField"
                                type="text"
                                name="lastName"
                                value={signUpDetails.lastName}
                                onChange={(e) => setSignUpDetails({ ...signUpDetails, lastName: e.target.value })}
                            ></input>
                        </label>
                        <p className="text4">Username </p>
                        <label className="SignUpPageInputBox">
                            <input
                                className="SignUpPageInputField"
                                type="text"
                                name="userName"
                                value={signUpDetails.userName}
                                onChange={(e) => setSignUpDetails({ ...signUpDetails, userName: e.target.value })}
                            ></input>
                        </label>
                        <p className="text4">Email Address </p>
                        <label className="SignUpPageInputBox">
                            <input
                                className="SignUpPageInputField"
                                type="text"
                                name="email"
                                value={signUpDetails.email}
                                onChange={(e) => setSignUpDetails({ ...signUpDetails, email: e.target.value })}
                            ></input>
                        </label>
                        <p className="text4">Password </p>
                        <label className="SignUpPageInputBox">
                            <input
                                className="SignUpPageInputField"
                                type="password"
                                name="password"
                                value={signUpDetails.password}
                                onChange={(e) => setSignUpDetails({ ...signUpDetails, password: e.target.value })}
                            ></input>
                        </label>
                        <p className="text4">Confirm Password </p>
                        <label className="SignUpPageInputBox">
                            <input
                                className="SignUpPageInputField"
                                type="password"
                                name="confirmPassword"
                                value={signUpDetails.confirmPassword}
                                onChange={(e) =>
                                    setSignUpDetails({ ...signUpDetails, confirmPassword: e.target.value })
                                }
                            ></input>
                        </label>
                        <input
                            className="SignUpPageSubmitButton heading2"
                            type="submit"
                            value="Create an account"
                        ></input>
                        {/* Change this for auth?  */}
                    </form>
                </div>
            </div>
=======
        <div className='SignUpPage'>
          <div className='SignUpPageBox'>
              <h1 className='SignUpPageTitle'>Create your account</h1>
              <form className='SignUpPageForm'>
                <p className='PersonalInfo'>First Name </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="text" ></input>
                  </label>
                <p className='PersonalInfo'>Last Name </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="text" ></input>
                  </label>
                <p className='PersonalInfo'>Username </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="text" ></input>
                  </label>
                <p className='PersonalInfo'>Email Address </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="text" ></input>
                  </label>
                <p className='PersonalInfo'>Password </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="password" ></input>
                  </label>
                <p className='PersonalInfo'>Confirm Password </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="password" ></input>
                  </label>
                <Link to='/Login'><input className='SignUpPageSubmitButton heading2' type="submit" value="Create an account"></input></Link> {/* Change this for auth?  */}

              </form>
          </div>
        </div>
>>>>>>> Stashed changes
        </>
    );
}

export default SignUpPage;
