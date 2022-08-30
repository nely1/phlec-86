import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPageBody from './LandingPageBody';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Render Webpage
    // Add Main Components to be Rendered Here
    <Router>
        <Navbar />   
        <Routes>
            <Route path='/' element={<LandingPageBody />}></Route> 
            <Route path='/Login' element={<LoginPage />}></Route>
        </Routes> 
    </Router>
)
