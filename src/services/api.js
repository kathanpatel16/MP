import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
