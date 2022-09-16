import React from 'react';

import { Link, NavLink} from 'react-router-dom';

import { loginStatus } from '../App';

import NavButton  from './NavButton';

import './Navbar.css';



/* This will probably be changed when Auth is added */

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
            page:       this.props.page,
            loggedIn:   this.props.loggedIn,
        }
    }



    render() {
        // Different button layouts depending on if logged in or not
        let buttons, loginButton;


        // If not logged in, load only the login button
        if (this.state.loggedIn === false) {
            console.log("not logged in");
            loginButton = 
                <NavButton page="Login" >
                    Login
                </NavButton>

        } else {
            buttons = Object.values(Pages).map((page) => 
                <li key={page}>
                    <NavLink to={page} >
                        <NavButton page={page} />
                    </NavLink>
                </li>); 
                loginButton = 
                    <NavButton className="loginoutButton" page="Logout" >
                        Logout
                    </NavButton>
        }

        // Render Navbar
        return (
            <div className="navbarBase">
                <Link to='/Home' className="navbarLogo">
                    <div className="navbarLogo" href="/">
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
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
