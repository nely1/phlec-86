import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import LandingPageBody from './pages/LandingPageBody';
import LoginPage from './pages/LoginPage';



export default function App() {
  return (
    <Router>
        <Navbar />   
        <Routes>
            <Route path='/' element={<LandingPageBody />}></Route> 
            <Route path='/Login' element={<LoginPage />}></Route>
        </Routes> 
    </Router>
  )
}
