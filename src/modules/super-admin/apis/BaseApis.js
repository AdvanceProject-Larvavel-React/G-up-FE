import axios from "axios";
const baseURL = `http://localhost:8000/api`;
const BaseApi = axios.create({
    baseURL: baseURL,
});
export default BaseApi;