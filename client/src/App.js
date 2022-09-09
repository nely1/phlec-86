import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPageBody from './pages/LandingPageBody';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import AlbumPage from './pages/AlbumPage';



const ROOT      = '/';
const LOGIN     = '/Login';
const LANDING   = '/Landing';
const HOME      = '/Home';
const LOGOUT    = '/Logout';
const SIGNUP    = '/SignUp';
const RECORD    = '/Record';
const ALBUM     = '/Album';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROOT}  element={<LandingPageBody />}></Route> 
                <Route path={LOGOUT} element={ <Navigate to={HOME}/>} />
                <Route path={LOGIN} element={<LoginPage />}></Route>
                <Route path={LANDING}  element={<LandingPageBody />}></Route> 
                <Route path={HOME} element={<HomePage />}></Route>
                <Route path={SIGNUP} element={<SignUpPage />}></Route>
                <Route path={RECORD} element={<RecordPage />}></Route>
                <Route path={ALBUM} element={<AlbumPage />}></Route>
            </Routes> 
        </Router>
  )
}

