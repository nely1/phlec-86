import { combineReducers } from "redux";
import login from "./login";
import album from "./album";
import explore from "./explore";
import plan from "./plan";
import location from "./location";
import settings from "./settings";

export default combineReducers({
    login,
    album,
    explore,
    plan,
    location,
    settings,
});
