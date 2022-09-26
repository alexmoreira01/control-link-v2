import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://localhost:3333/link',
    baseURL: 'http://54.211.140.125/link',
    // baseURL: 'https://dev.freelancerdesucesso.fun/link',
});