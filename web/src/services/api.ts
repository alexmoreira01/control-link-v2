import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333/link',
    // baseURL: 'https://api-control-links-v1.herokuapp.com/link',
});