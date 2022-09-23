import { combineReducers } from "redux";
import login from "./login";
import album from "./album";
import explore from "./explore";

export default combineReducers({
    login,
    album,
    explore,
});
