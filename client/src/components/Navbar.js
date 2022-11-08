import React, { useState, useEffect } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import NavButton from "./NavButton";
import "./Navbar.css";

// Enum for the pages in the navbar
export const Pages = Object.freeze({
  Home: "home",
  Record: "record",
  Album: "album",
  Explore: "explore",
  Plan: "plan",
  Settings: "settings",
});

export default function Navbar({ loggedIn, setLogin }) {
  let buttons, loginButton;
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setLogin(false);
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.token]);

  // If not logged in, load only the login button
  if (loggedIn === false) {
    loginButton = <NavButton page="Login">Login</NavButton>;
  } else {
    buttons = Object.values(Pages).map((page) => (
      <li key={page}>
        <NavLink to={page}>
          <NavButton page={page} />
        </NavLink>
      </li>
    ));
    loginButton = (
      <NavButton
        className="loginoutButton"
        page="logout"
        setLogin={setLogin}
        logoutFunc={() => {
          logout();
        }}
      >
        Logout
      </NavButton>
    );
  }

  return (
    <div className="navbarBase">
      {loggedIn ? (
        <Link to="/home" className="navbarLogo">
          <div className="navbarLogo">
            <div className="logoSpacer"></div>
            <div className="logoText">Phlec Travels</div>
          </div>
        </Link>
      ) : (
        <Link to="/" className="navbarLogo">
          <div className="navbarLogo">
            <div className="logoSpacer"></div>
            <div className="logoText">Phlec Travels</div>
          </div>
        </Link>
      )}

      <ul className="navbarButtons">{buttons}</ul>
      <img
        className="profileImage"
        src={process.env.PUBLIC_URL + "/profiledefault.png"}
        alt="Default Profile"
      />
      {loginButton}
    </div>
  );
}
