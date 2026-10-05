import axios from 'axios';

// Create a centralized Axios instance
const api = axios.create({
  baseURL: process.env.PUBLIC_API_URL || 'https://api.axon.com/v1/api/',
  timeout: 15000, // Enterprise APIs should fail fast rather than hanging
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Automatically inject auth tokens if they exist
api.interceptors.request.use(
  (config) => {
    // Note: In production, consider secure HttpOnly cookies, but if using JWT in storage:
    const token = localStorage.getItem('axon_access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Global error handling
api.interceptors.response.use(
  (response) => response.data, // Strip out the Axios wrapper, return raw data
  (error) => {
    const status = error.response?.status;
    
    // Globally handle expired sessions
    if (status === 401) {
      console.warn('[Axon API] Unauthorized. Redirecting to login...');
      // Clear token and force redirect without requiring React Router context
      localStorage.removeItem('axon_access_token');
      window.location.href = 'https://app.axon.com/login';
    }

    // Standardize the error payload for the frontend to consume
    const customError = {
      message: error.response?.data?.message || 'An unexpected server error occurred.',
      status: status,
      original: error,
    };

    return Promise.reject(customError);
  }
);

export default api;