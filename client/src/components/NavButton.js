import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


export default function NavButton (props) {

    let navigate = useNavigate()
    const routeChange = () => {
        let path = "/" + props.page;
        navigate(path);  
    }


    const location = useLocation();

    let toggled = location.pathname === "/" + props.page;

    if (toggled === undefined) {
        toggled = true;
    }


    if (props.children === "Login" ||
        props.children === "Logout") {
        toggled = true;
        return (
            <button
            className="loginoutButton"
            onClick={ routeChange }>
            { props.page }
            </button>
        );
    }

    return (
        <button 
        className={"styledButton " + (toggled ? "toggledButton" : "untoggledButton")} 
        onClick={routeChange}>
        {props.page}
        </button>
    );
}
