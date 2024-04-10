import axios from "axios";
import { API_URL } from "./env.config";

// let token = typeof window !== 'undefined' && localStorage.getItem("accessToken");

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30 * 1000, // 30s
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${
      typeof window !== "undefined" && localStorage.getItem("accessToken")
    }`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response ? error.response : error)
);

export default axiosInstance;
