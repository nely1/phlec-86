import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavButton (props) {

    let navigate = useNavigate()
    const routeChange = () => {
        let path = "/" + props.page;
        navigate(path);  
    }

    let toggled = props.toggled;

    if (toggled === undefined) {
        toggled = true;
    }

    if (props.className === "loginButton") {
        console.log("Rendering Login button");
        return (
            <button 
                className="loginButton"
                onClick={routeChange}>
                Login
            </button>
        );
    }
    if (props.className === "logoutButton") {
        console.log("Rendering Logout Button");
        return (
            <button
                className="loginButton"
                onClick={routeChange}>
                Logout
            </button>
        )
    }
    return (
        <button 
        className={toggled ? "navButtonToggled" : "navButtonUntoggled"} 
        onClick={routeChange}>
        {props.page}
        </button>
    );
}
