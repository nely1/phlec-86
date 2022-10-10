import { combineReducers } from "redux";
import login from "./login";
import album from "./album";
import plan from "./plan";
import location from "./location";

export default combineReducers({
    login,
    album,
    plan,
    location,
});
