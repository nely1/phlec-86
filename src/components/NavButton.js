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

    if (props.type === "login") {
        return (
            <button 
            className="loginoutButton" 
            onClick={routeChange}>
            {props.page}
            </button>
        );
    }
    
    return (
        <button 
        className={toggled ? "navButtonToggled" : "navButtonUntoggled"} 
        onClick={routeChange}>
        {props.page}
        </button>
    );
}
