import axios from "axios";

const uploadsRoute = axios.create({
    baseURL: 'http://localhost:8080/uploader/upload'
});
export default uploadsRoute;