import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingPageBody from './pages/LandingPageBody';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';



const ROOT      = '/';
const LOGIN     = '/Login';
const LANDING   = '/Landing';
const HOME      = '/Home';
const LOGOUT    = '/Logout';
const SIGNUP    = '/SignUp';
const RECORD    = '/Record';

export var LoggedIn = true;

export default function App() {
    return (
        <>
        <Router>
                <Navbar loggedIn={LoggedIn}/>
            <Routes>
                <Route path={ROOT}  element={<LandingPageBody />}></Route> 
                <Route path={LOGOUT} element={ Logout() }/>
                <Route path={LOGIN} element={<LoginPage />}></Route>
                <Route path={LANDING}  element={<LandingPageBody />}></Route> 
                <Route path={HOME} element={<HomePage />}></Route>
                <Route path={SIGNUP} element={<SignUpPage />}></Route>
                <Route path={RECORD} element={<RecordPage />}></Route>
            </Routes> 
        </Router>
        </>
  )
}

export function Login() {
    console.log("Logging In");
    LoggedIn = true;
}

export function Logout() {
    LoggedIn = false;
    return <Navigate to={ROOT}/>
}

/*
export function getLogin() {
    return loggedIn;
}
*/

