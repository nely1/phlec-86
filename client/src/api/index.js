import axios from "axios";

const API = axios.create({ baseUrl: "https://phlec-86.herokuapp.com/" });

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

export const updateAlbumOne = (id, updatedAlbum) => API.patch(`/user/albumview/${id}`, updatedAlbum);

export const deleteAlbum = (id) => API.delete(`/user/albumview/${id}`);

export const signUpUser = (signUpDetails) => API.post("/login/signUp", signUpDetails);
