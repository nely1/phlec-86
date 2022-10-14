import { combineReducers } from "redux";
import login from "./login";
import album from "./album";
import plan from "./plan";
import location from "./location";
import settings from "./settings";

export default combineReducers({
    login,
    album,
    plan,
    location,
    settings,
});
