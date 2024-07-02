import axios from "axios";
import tokenService from "../utils/tokenService";

export const baseUrl = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Adding request interceptor to include headers from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleApiError = async (error) => {
  if (error.response && error.response.status === 401) {
    try {
      const newAccessToken = await tokenService.refreshAccessToken();

      if (newAccessToken) {
        error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(error.config);
      }
    } catch (refreshError) {
      window.location.href = "/login";
      throw refreshError;
    }
  }
  throw error;
};

const postApi = async (apiUrl, body, headers = {}) => {
  try {
    const response = await axiosInstance.post(apiUrl, body, headers);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return handleApiError(error);
    }
  }
};

const getApi = async (apiUrl, headers = {}) => {
  try {
    const response = await axiosInstance.get(apiUrl, headers);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return handleApiError(error);
    }
  }
};

export { postApi, getApi };
