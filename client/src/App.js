import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "./actions/login";

import Navbar from "./components/Navbar";

import LandingPageBody from "./pages/LandingPageBody";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";
import AlbumPage from "./pages/AlbumPage";
import ExplorePage from "./pages/ExplorePage";
import AlbumViewPage from "./pages/AlbumViewPage";
import PlanPage from "./pages/PlanPage";
import PlanViewPage from "./pages/PlanViewPage";
import PlanEditPage from "./pages/PlanEditPage";
import SettingsPage from "./pages/SettingsPage";

const ROOT = "/";
const LOGIN = "/login";
const LANDING = "/landing";
const HOME = "/home";
const LOGOUT = "/logout";
const SIGNUP = "/signUp";
const RECORD = "/record";
const ALBUM = "/album";
const ALBUM_VIEW = "/albumView/:id";
const EXPLORE = "/explore";
const PLAN = "/plan";
const PLAN_VIEW = "/planView";
const PLAN_EDIT = "/planEdit/:id";
const SETTINGS = "/settings";

export let LoggedIn = true;

export default function App() {
  const dispatch = useDispatch();

  const [LoggedIn, setLoggedIn] = useState(
    localStorage.getItem("profile") ? true : false
  );
  useEffect(() => {
    dispatch(loginUser);
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar loggedIn={LoggedIn} setLogin={setLoggedIn} />
        <Routes>
          <Route path={ROOT} element={<LandingPageBody />}></Route>
          <Route path={LOGOUT} element={<LandingPageBody />}></Route>
          <Route
            path={LOGIN}
            element={<LoginPage loginState={LoggedIn} setLogin={setLoggedIn} />}
          ></Route>
          <Route path={LANDING} element={<LandingPageBody />}></Route>
          <Route
            path={HOME}
            element={<HomePage loginState={LoggedIn} />}
          ></Route>
          <Route path={SIGNUP} element={<SignUpPage />}></Route>
          <Route
            path={RECORD}
            element={<RecordPage loginState={LoggedIn} />}
          ></Route>
          <Route
            path={ALBUM}
            element={<AlbumPage loginState={LoggedIn} />}
          ></Route>
          <Route
            path={ALBUM_VIEW}
            element={<AlbumViewPage loginState={LoggedIn} />}
          ></Route>
          <Route
            path={EXPLORE}
            element={<ExplorePage loginState={LoggedIn} />}
          ></Route>
          <Route
            path={PLAN}
            element={<PlanPage loginState={LoggedIn} />}
          ></Route>
          <Route
            path={PLAN_VIEW}
            element={<PlanViewPage loginState={LoggedIn} />}
          ></Route>
          <Route
            path={PLAN_EDIT}
            element={<PlanEditPage loginState={LoggedIn} />}
          ></Route>
          <Route
            path={SETTINGS}
            element={<SettingsPage loginState={LoggedIn} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
