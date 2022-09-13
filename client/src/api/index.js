import axios from 'axios';

const API = axios.create({baseUrl: 'http://localhost:5000'})

export const loginUser = (loginDetails) => 
    API.post('/login', loginDetails);

export const signUpUser = (signUpDetails) => API.post('/login/signUp', signUpDetails);