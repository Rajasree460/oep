import axios from 'axios';

const URL="http://localhost:8080/api";

const api = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;