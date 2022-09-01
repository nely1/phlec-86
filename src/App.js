import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import LandingPageBody from './pages/LandingPageBody';
import LoginPage from './pages/LoginPage';
import Pages from './components/Navbar';
import Dashboard from './pages/Dashboard';



const ROOT      = '/';
const LOGIN     = '/Login';
const HOME      = '/Home';
const DASHBOARD = '/Dashboard';

export default function App() {
    let currentPage = Pages.Home;
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={ROOT}  element={<LandingPageBody />}></Route> 
                <Route path={LOGIN} element={<LoginPage />}></Route>
                <Route path={HOME}  element={<LandingPageBody />}></Route> 
                <Route path={DASHBOARD} element={<Dashboard />}></Route>
            </Routes> 
        </Router>
  )
}
