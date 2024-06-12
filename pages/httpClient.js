import axios from 'axios';
import Router from 'next/router';

// Create an instance of axios
const httpClient = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your Flask backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
httpClient.interceptors.request.use(
  config => {
    // Add authorization token here if needed
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      Router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default httpClient;
