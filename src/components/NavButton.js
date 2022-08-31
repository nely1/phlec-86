import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavButton (props) {

    let navigate = useNavigate()
    const routeChange = () => {
        let path = "/" + props.page;
        navigate(path);  
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
    return (
        <button 
        className={props.toggled ? "navButtonToggled" : "navButtonUntoggled"} 
        onClick={routeChange}>
        {props.page}
        </button>
    );
}
