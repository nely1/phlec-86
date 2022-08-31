import React from 'react';

import NavButtons from './NavButtons';
import NavButton  from './NavButton';


// Enum for the pages in the navbar
export const Pages = Object.freeze({
    Home:       "Home",
    Record:     "Record",
    Album:      "Album",
    Explore:    "Explore",
    Plan:       "Plan",
    Settings:   "Settings",
});

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page:       Pages.Home,
            loggedIn:   false,
        } 
    }


    render() {

        // Different button layouts depending on if logged in or not
        let buttons;
        if (this.state.loggedIn === false) {
            buttons = <NavButtons page={Pages.Home} toggled="true"/>
        } else {
            buttons = Object.values(Pages).map((page) => 
                <li key={page}>
                    <NavButtons 
                        page={page} 
                        toggled={page===this.state.page ? "true" : "false"}
                    />
                 </li>); 

        }

        // Render Navbar
        return (
            <>
            <div className="navbarBase">
                <div className="navbarLogo">
                    <div className="logoSpacer"></div>
                    <div className="logoText">Phlec Travels</div>
                </div>
                <ul className="navbarButtons">{buttons}</ul>
                <img className="profileImage" src="profiledefault.png" />
                <NavButton className="loginButton" page="Login" toggled={true}/>
            </div>
            </>
        );
    }
}
