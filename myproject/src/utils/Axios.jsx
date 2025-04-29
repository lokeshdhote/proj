import axios from "axios";

// Create an axios instance
const instance = axios.create({

  // Set your base URL (adjust based on production/development)
  // baseURL: "https://sih-project-backend-jade.vercel.app/",
  baseURL: "http://localhost:3000",    
 
  withCredentials: true,
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("giTaskr");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle any request errors
    return Promise.reject(error);
  }
);

export default instance;
