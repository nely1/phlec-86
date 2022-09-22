import axios from "axios";

const API = axios.create({ baseUrl: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`
    }
    return req;
})

export const loginUser = (loginDetails) => API.post("/login", loginDetails);

export const createAlbum = (newAlbum) => API.post("/user/record", newAlbum);

export const getAlbums = (id) => API.get(`/user/${id}/albums`);

export const signUpUser = (signUpDetails) =>
    API.post("/login/signUp", signUpDetails);
