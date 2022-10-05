import axios from "axios";

const API = axios.create({ baseUrl: "http://localhost:5000" });
// Change url to http://localhost:5000. If want to use local server
// const url = "https://phlec-86.herokuapp.com/";
const url = "http://localhost:5000";
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile"))}`;
    }
    return req;
});

export const loginUser = (loginDetails) => axios.post(`${url}/login`, loginDetails);

export const createAlbum = (newAlbum) => axios.post(`${url}/user/record`, newAlbum);

export const getAlbums = (id) => axios.get(`${url}/user/${id}/albums`);

export const getAlbumOne = (id) => axios.get(`${url}/user/albumview/${id}`);

export const updateAlbumOne = (id, updatedAlbum) => axios.patch(`${url}/user/albumview/${id}`, updatedAlbum);

export const deleteAlbum = (id) => axios.delete(`${url}/user/albumview/${id}`);

export const signUpUser = (signUpDetails) => axios.post(`${url}/login/signUp`, signUpDetails);
