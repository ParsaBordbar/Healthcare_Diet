import axios from "axios";

const api = axios.create({
    baseURL:`${process.env.DOMAIN_FILES}api`
});
export default api;