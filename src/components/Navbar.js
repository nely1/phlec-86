import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import NavButtons from './NavButtons';
import NavButton  from './NavButton';

import './Navbar.css';


/* This will probably be changed when Auth is added */
import { Login, Logout, loggedIn} from '../App';

// Enum for the pages in the navbar
export const Pages = Object.freeze({
    Home:       "Home",
    /* Dashboard:  "Dashboard", */
    Record:     "Record",
    Album:      "Album",
    Explore:    "Explore",
    Plan:       "Plan",
    Settings:   "Settings",
});

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            page:       this.props.page,
            loggedIn:   this.props.loggedIn,
        }
    }

    render() {
        // Different button layouts depending on if logged in or not
        let buttons, loginButton;

        /* Need to Check Login state here */
        if (this.state.loggedIn === false) {
            console.log("not logged in");
            buttons = <NavButton page={Pages.Home} toggled="true"/>
            loginButton = <NavButton className="loginoutButton" page="Login" >
                Login
                </NavButton>
        } else {
            console.log("Rendering nav buttons");
            console.log("page: " + this.props.page);

            buttons = Object.values(Pages).map((page) => 
                <li key={page}>
                <NavLink to={page}  >
                    <NavButton 
                        page={page} 
                />
                </NavLink>
                 </li>); 
            loginButton = <NavButton className="LoginoutButton" page="Logout">
                    Logout
                </NavButton>
        }

        // Render Navbar
        return (
            <div className="navbarBase">
                <Link to='/Home' className="navbarLogo">
                    <div className="navbarLogo" href="/Home">
                        <div className="logoSpacer"></div>
                        <div className="logoText">Phlec Travels</div>
                    </div>
                </Link>
                <ul className="navbarButtons">{buttons}</ul>
                <img className="profileImage" src="profiledefault.png" alt="Default Profile" />
            {loginButton}
            </div>       
        );
    }
}
