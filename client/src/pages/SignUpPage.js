import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import { useDispatch } from "react-redux";
import { signUpUser } from "../actions/signUp";

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
      <div className="SignUpPage">
        <div className="SignUpPageBox">
          <h1 className="SignUpPageTitle">Create your account</h1>
          <form className="SignUpPageForm" onSubmit={handleSubmit}>
            <p className="PersonalInfo">First Name </p>
            <label className="SignUpPageInputBox">
              <input
                className="SignUpPageInputField"
                type="text"
                name="firstName"
                value={signUpDetails.firstName}
                pattern="[a-zA-Z]+"
                title="Invalid name"
                required
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    firstName: e.target.value,
                  })
                }
              ></input>
            </label>
            <p className="PersonalInfo">Last Name </p>
            <label className="SignUpPageInputBox">
              <input
                className="SignUpPageInputField"
                type="text"
                name="lastName"
                pattern="[a-zA-Z]+"
                title="Invalid name"
                required
                value={signUpDetails.lastName}
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    lastName: e.target.value,
                  })
                }
              ></input>
            </label>
            <p className="PersonalInfo">Username </p>
            <label className="SignUpPageInputBox">
              <input
                className="SignUpPageInputField"
                type="text"
                name="userName"
                maxlength="15"
                required
                title="Maximum character limit is 15"
                value={signUpDetails.userName}
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    userName: e.target.value,
                  })
                }
              ></input>
            </label>
            <p className="PersonalInfo">Email Address </p>
            <label className="SignUpPageInputBox">
              <input
                className="SignUpPageInputField"
                type="text"
                name="email"
                value={signUpDetails.email}
                required
                pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Invalid email address"
                onChange={(e) =>
                  setSignUpDetails({ ...signUpDetails, email: e.target.value })
                }
              ></input>
            </label>
            <p className="PersonalInfo">Password </p>
            <label className="SignUpPageInputBox">
              <input
                className="SignUpPageInputField"
                type="password"
                name="password"
                value={signUpDetails.password}
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and be 
                                at least 8 characters"
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    password: e.target.value,
                  })
                }
              ></input>
            </label>
            <p className="PersonalInfo">Confirm Password </p>
            <label className="SignUpPageInputBox">
              <input
                className="SignUpPageInputField"
                type="password"
                name="confirmPassword"
                value={signUpDetails.confirmPassword}
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    confirmPassword: e.target.value,
                  })
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
    </>
  );
}

export default SignUpPage;
