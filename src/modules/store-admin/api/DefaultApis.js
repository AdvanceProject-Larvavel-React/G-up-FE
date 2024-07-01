import axios from "axios";

const api = `http://localhost:8000/api`;
export const apiClient = axios.create({
    baseURL: api,
});
