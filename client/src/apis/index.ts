import axios from "axios";

const api = axios.create({
    baseURL: 'http://70.34.217.65:8080//api'
});
export default api;