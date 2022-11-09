import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsPage.css";
import { useDispatch } from "react-redux";
import { changeProfile, getUserInfo } from "../actions/changeProfile";
import { useSelector } from "react-redux";

function SettingsPage({ loginState }) {
  const [change, setChange] = useState(false);
  const user = useSelector((state) => state.settings);
  const [load, setLoad] = useState(0);

  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    if (!loginState) {
      history("/login");
    } else {
      dispatch(getUserInfo(JSON.parse(localStorage.getItem("profile")).result._id));
    }
  }, [history, loginState, dispatch]);

  const userInfo = JSON.parse(localStorage.getItem("profile"));

  const [userDetails, setUserDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    password: user.password,
    token: userInfo.token,
  });

  if (user.userName != null && load < 1) {
    setUserDetails({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      token: userInfo.token,
    });
    setLoad(load + 1);
  }

  function changingState() {
    setChange((prev) => !prev);
  }

  function HandleChange(event) {
    changingState();
    event.preventDefault();
    dispatch(changeProfile(userDetails, userInfo, history));
  }

  if (!loginState) {
    return <></>;
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
                Name : &emsp;&emsp;&emsp; {user.firstName + " " + user.lastName}
              </p>
              <p className="PersonalInfo">Username : &emsp; {user.userName}</p>
              <p className="PersonalInfo">
                Email : &emsp;&emsp;&emsp; {user.email}
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
