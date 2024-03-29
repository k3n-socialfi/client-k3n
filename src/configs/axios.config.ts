import axios from "axios";
import { API_URL } from "./env.config";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30 * 1000, // 30s
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("👋  API_URL:", API_URL)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response ? error.response : error)
);

export default axiosInstance;
