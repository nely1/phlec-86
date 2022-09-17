import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginUser } from './actions/login'

import Navbar from './components/Navbar';

import LandingPageBody from './pages/LandingPageBody';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import AlbumPage from './pages/AlbumPage';
import ExplorePage from './pages/ExplorePage';
import PlanPage from './pages/PlanPage';



const ROOT      = '/';
const LOGIN     = '/Login';
const LANDING   = '/Landing';
const HOME      = '/Home';
const LOGOUT    = '/Logout';
const SIGNUP    = '/SignUp';
const RECORD    = '/Record';
const ALBUM     = '/Album';
const EXPLORE   = '/Explore';
const PLAN = '/Plan';


export var LoggedIn = true;

export default function App() {
    const dispatch = useDispatch();
    const [LoggedIn, setLoggedIn] = useState(false);
    useEffect(() => { dispatch(loginUser); }, [dispatch]);
    
    return (

        <>
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
                <Route path={PLAN} element={<PlanPage />}></Route>
            </Routes> 
        </Router>
        </>
  )
}



/*
export function getLogin() {
    return loggedIn;
}
*/

