import axios from "axios";
import { API_URL } from "./env.config";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30 * 1000, // 30s
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response ? error.response : error)
);

export default axiosInstance;
