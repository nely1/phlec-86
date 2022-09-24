import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "./actions/login";

import Navbar from "./components/Navbar";

<<<<<<< HEAD
import LandingPageBody from './pages/LandingPageBody';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import AlbumPage from './pages/AlbumPage';
import ExplorePage from './pages/ExplorePage';
import SettingsPage from './pages/SettingsPage';
=======
>>>>>>> 4e3982ac3ee5f8bf82931afad769b053358c3f41

import LandingPageBody from "./pages/LandingPageBody";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";
import AlbumPage from "./pages/AlbumPage";
import ExplorePage from "./pages/ExplorePage";
import AlbumViewPage from "./pages/AlbumViewPage";
import PlanPage from './pages/PlanPage';

<<<<<<< HEAD

const ROOT      = '/';
const LOGIN     = '/Login';
const LANDING   = '/Landing';
const HOME      = '/Home';
const LOGOUT    = '/Logout';
const SIGNUP    = '/SignUp';
const RECORD    = '/Record';
const ALBUM     = '/Album';
const EXPLORE   = '/Explore';
const SETTINGS   = '/Settings'

=======
const ROOT = "/";
const LOGIN = "/Login";
const LANDING = "/Landing";
const HOME = "/Home";
const LOGOUT = "/Logout";
const SIGNUP = "/SignUp";
const RECORD = "/Record";
const ALBUM = "/Album";
const ALBUM_VIEW = "/AlbumView/:id";
const EXPLORE = "/Explore";
const PLAN = '/Plan';
>>>>>>> 4e3982ac3ee5f8bf82931afad769b053358c3f41

export var LoggedIn = true;

export default function App() {
    const dispatch = useDispatch();

    const [LoggedIn, setLoggedIn] = useState(localStorage.getItem("profile") ? true : false);
    useEffect(() => {
        dispatch(loginUser);
    }, [dispatch]);

    const path = (name) => {
        return localStorage.getItem("profile") ? name : LOGIN;
    };

    const element = (page) => {
        return localStorage.getItem("profile") ? page : <LoginPage loginState={LoggedIn} setLogin={setLoggedIn} />;
    };

    return (
        <>
<<<<<<< HEAD
        <Router>
                <Navbar loggedIn={LoggedIn} setLogin = {setLoggedIn}/>
            <Routes>
                <Route path={ROOT}  element={<LandingPageBody />}></Route> 
                <Route path={LOGOUT} element={ <LandingPageBody/>}></Route>
                <Route path={LOGIN} element={<LoginPage loginState = {LoggedIn} setLogin = {setLoggedIn}/>}></Route>
                <Route path={LANDING}  element={<LandingPageBody />}></Route> 
                <Route path={HOME} element={<HomePage />}></Route>
                <Route path={SIGNUP} element={<SignUpPage />}></Route>
                <Route path={RECORD} element={<RecordPage />}></Route>
                <Route path={ALBUM} element={<AlbumPage />}></Route>
                <Route path={EXPLORE} element={<ExplorePage />}></Route>
                <Route path={SETTINGS} element={<SettingsPage />}></Route>
            </Routes> 
        </Router>
=======

            <Router>
                <Navbar loggedIn={LoggedIn} setLogin={setLoggedIn} />
                <Routes>
                    <Route path={ROOT} element={<LandingPageBody />}></Route>
                    <Route path={LOGOUT} element={<LandingPageBody />}></Route>
                    <Route path={LOGIN} element={<LoginPage loginState={LoggedIn} setLogin={setLoggedIn} />}></Route>
                    <Route path={LANDING} element={<LandingPageBody />}></Route>
                    <Route path={HOME} element={<HomePage loginState={LoggedIn} />}></Route>
                    <Route path={SIGNUP} element={<SignUpPage />}></Route>
                    <Route path={RECORD} element={<RecordPage loginState={LoggedIn} />}></Route>
                    <Route path={ALBUM} element={<AlbumPage loginState={LoggedIn} />}></Route>
                    <Route path={ALBUM_VIEW} element={<AlbumViewPage loginState={LoggedIn} />}></Route>
                    <Route path={EXPLORE} element={<ExplorePage />}></Route>
                    <Route path={PLAN} element={<PlanPage />}></Route>
                </Routes>
            </Router>
>>>>>>> 4e3982ac3ee5f8bf82931afad769b053358c3f41
        </>
    );
}

/*
export function getLogin() {
    return loggedIn;
}
*/
