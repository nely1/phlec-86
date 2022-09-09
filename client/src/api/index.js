import axios from 'axios';

const url = 'http://localhost:3000/login';

export const loginUser = () => axios.get(url);