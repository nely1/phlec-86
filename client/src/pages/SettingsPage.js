import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsPage.css";
import { useDispatch } from "react-redux";
import { changeProfile } from "../actions/changeProfile";

function SettingsPage() {
  const [change, setChange] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useNavigate();

  console.log(userInfo);

  const [userDetails, setUserDetails] = useState({
    firstName: userInfo.result.firstName,
    lastName: userInfo.result.lastName,
    userName: userInfo.result.userName,
    email: userInfo.result.email,
    password: userInfo.result.password,
    token: userInfo.token,
  });

  function changingState() {
    setChange((prev) => !prev);
  }

  function HandleChange(event) {
    changingState();
    event.preventDefault();
    dispatch(changeProfile(userDetails, userInfo, history));
  }

  return (
    <>
      <div className="SettingsPage">
        <div className="SettingsPageBox">
          <img
            className="profileImage2"
            src="profiledefault.png"
            alt="Default Profile"
          />
          {!change ? (
            <>
              <p className="PersonalInfo">
                Name : &emsp;&emsp;&emsp;{" "}
                {userInfo.result.firstName + " " + userInfo.result.lastName}
              </p>
              <p className="PersonalInfo">
                Username : &emsp; {userInfo.result.userName}
              </p>
              <p className="PersonalInfo">
                Email : &emsp;&emsp;&emsp; {userInfo.result.email}
              </p>
              <p className="PersonalInfo">Password :</p>
              <button className="ChangeButton text3" onClick={changingState}>
                {" "}
                Change{" "}
              </button>
            </>
          ) : (
            <form className="SettingsPageForm" onSubmit={HandleChange}>
              <p className="PersonalInfo">
                First Name : &ensp;&nbsp;
                <label className="SettingsPageInputBox">
                  <input
                    className="SettingsPageInputField"
                    type="text"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        firstName: e.target.value,
                      })
                    }
                  ></input>
                </label>
              </p>
              <p className="PersonalInfo">
                Last Name : &ensp;&nbsp;
                <label className="SettingsPageInputBox">
                  <input
                    className="SettingsPageInputField"
                    type="text"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        lastName: e.target.value,
                      })
                    }
                  ></input>
                </label>
              </p>
              <p className="PersonalInfo">
                Username : &emsp;
                <label className="SettingsPageInputBox">
                  <input
                    className="SettingsPageInputField"
                    type="text"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        userName: e.target.value,
                      })
                    }
                  ></input>
                </label>
              </p>
              <p className="PersonalInfo">
                Email : &emsp;&emsp;&emsp;
                <label className="SettingsPageInputBox">
                  <input
                    className="SettingsPageInputField"
                    type="text"
                    required="required"
                    pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Invalid email address"
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                  ></input>
                </label>
              </p>
              <p className="PersonalInfo">
                Password : &emsp;&nbsp;
                <label className="SettingsPageInputBox">
                  <input
                    className="SettingsPageInputField"
                    type="password"
                    required="required"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and be 
                                        at least 8 characters"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      })
                    }
                  ></input>
                </label>
              </p>
              <button className="ChangeButton text3" type="submit">
                {" "}
                Save{" "}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default SettingsPage;
