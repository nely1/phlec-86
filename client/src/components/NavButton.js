import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavButton(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/" + props.page;
    if (props.children === "Logout") {
      props.logoutFunc();
    }
    navigate(path);
  };

  function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const location = useLocation();

  let toggled = location.pathname === "/" + props.page;

  if (toggled === undefined) {
    toggled = true;
  }

  if (props.children === "Login" || props.children === "Logout") {
    toggled = true;
    return (
      <button className="loginoutButton" onClick={routeChange}>
        {capFirstLetter(props.page)}
      </button>
    );
  }

  return (
    <button
      className={
        "styledButton " + (toggled ? "toggledButton" : "untoggledButton")
      }
      onClick={routeChange}
    >
      {capFirstLetter(props.page)}
    </button>
  );
}
