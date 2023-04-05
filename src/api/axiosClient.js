import axios from "axios";
import { API_BASE_URL_DEVELOPMENT } from "../constants/endpoints/endpointURL";

const axiosClient = axios.create({
  baseURL: API_BASE_URL_DEVELOPMENT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosNotToken = axios.create({
  baseURL: API_BASE_URL_DEVELOPMENT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosUpload = axios.create({ baseURL: API_BASE_URL_DEVELOPMENT });

axiosUpload.interceptors.request.use(async (config) => {
  //1. convert JSON to Object, then get value by key token
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  if (token[0] === '"') {
    // console.log(token);
    const _token = token.slice(1, token.length - 1);
    config.headers.Authorization = `Bearer ${_token}`;
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.request.use(async (config) => {
  //1. convert JSON to Object, then get value by key token
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  if (token[0] === '"') {
    // console.log(token);
    const _token = token.slice(1, token.length - 1);
    config.headers.Authorization = `Bearer ${_token}`;
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      // console.log(response.data);
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

axiosNotToken.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      // console.log(response.data);
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
