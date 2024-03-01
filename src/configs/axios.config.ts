import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  timeout: 30 * 1000, // 30s
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
