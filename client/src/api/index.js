import axios from "axios";

const API = axios.create({ baseUrl: "http://localhost:5000" });

export const loginUser = (loginDetails) => API.post("/login", loginDetails);

export const createAlbum = (newAlbum) => API.post("/user/record", newAlbum);

export const getAlbums = (albums) => API.get("/user/albums");

export const signUpUser = (signUpDetails) =>
    API.post("/login/signUp", signUpDetails);
