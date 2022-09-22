import { combineReducers } from "redux";
import login from "./login";
import album from "./album";

export default combineReducers({
    login,
    album,
});
