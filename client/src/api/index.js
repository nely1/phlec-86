import axios from "axios";

const API = axios.create({ baseUrl: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile"))}`;
    }
    return req;
});

export const loginUser = (loginDetails) => API.post("/login", loginDetails);

export const createAlbum = (newAlbum) => API.post("/user/record", newAlbum);

export const getAlbums = (id) => API.get(`/user/${id}/albums`);

export const getAlbumOne = (id) => API.get(`/user/albumview/${id}`);

export const signUpUser = (signUpDetails) => API.post("/login/signUp", signUpDetails);

export const getReview = () => API.get("/user/explore");

export const postReview = (id, review) => API.post(`/user/explore/${id}`, review);
