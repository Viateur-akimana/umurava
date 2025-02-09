import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://umurava-skill-challenge-backend-production.up.railway.app/api/v1/',
  headers: {
      'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response) {
          return Promise.reject(error.response.data);
      } else if (error.request) {
          return Promise.reject(new Error("No response from server"));
      } else {
          return Promise.reject(new Error("Error setting up request"));
      }
  }
);

export default apiClient