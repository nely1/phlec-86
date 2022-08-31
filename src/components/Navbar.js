import React from 'react';

import NavButtons from './NavButtons';

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
                <li><NavButtons page={page} toggled={page===this.state.page ? "true" : "false"}/></li>); 

        }

            /* TODO
            * Add styles to list to make horizontal should probably make it a flexbox */ 

            // Render Navbar
        return (
            <>
            <div className="navbarBase">
                <div className="navbarLogo">
                    <div className="logoSpacer"></div>
                    <div className="logoText">Phlec Travels</div>
                </div>
            <ul className="navBarButtons">{buttons}</ul>
            </div>
            </>
        );
    }
}
