// src/axiosConfig.js

import axios from 'axios';

// Create an instance of axios with default settings
const axiosInstance = axios.create({
  baseURL: 'https://your-backend-api.com/api', // Replace with your actual backend API base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // Add other headers as needed (e.g., Authorization)
  },
});

// Optional: Add request interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent, e.g., add authentication tokens
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Optional: Add response interceptors
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
