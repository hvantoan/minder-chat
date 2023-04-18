import axios from "axios";
import { API_BASE_URL_DEVELOPMENT } from "../constants/endpoints/endpointURL";
import { logoutAction } from "../redux/thunks/authThunk";

const store = import("../redux/store").then((module) => module.default);

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
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  if (token[0] === '"') {
    const _token = token.slice(1, token.length - 1);
    config.headers.Authorization = `Bearer ${_token}`;
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  if (token[0] === '"') {
    const _token = token.slice(1, token.length - 1);
    config.headers.Authorization = `Bearer ${_token}`;
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    if (error.response.status === 401) {
      store.dispatch(logoutAction());
    }
    throw error;
  }
);

axiosNotToken.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
