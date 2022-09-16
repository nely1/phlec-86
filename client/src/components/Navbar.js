import React, {useState, useEffect} from 'react';

import { Link, NavLink, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginStatus } from '../App';
import decode from 'jwt-decode';

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

export default function Navbar ({loggedIn, setLogin}) {
    let buttons, loginButton;
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    const logout = () => { 
        dispatch({type: "LOGOUT"});
        setLogin(false);
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        //console.log(token);
    
        if (token) {
          const decodedToken = decode(token);
          console.log(decodedToken.exp);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) {
            console.log("token expired")
            logout();
          }
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
        
      }, [location]);

    // If not logged in, load only the login button
    if (loggedIn === false) {
        buttons =  (<li key={"Explore"}>
        <NavLink to={"Explore"} >
            <NavButton page={"Explore"} />
        </NavLink>
    </li>); 
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
                <NavButton className="loginoutButton" page="Logout" setLogin = {setLogin} logoutFunc = {() => {logout()}}>
                    Logout
                </NavButton>
    }

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


