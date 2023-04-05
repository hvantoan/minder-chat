export const API_BASE_URL_DEVELOPMENT = "https://localhost:8100";

const ENDPOINTS = {
  REGISTER: "api/auth/register",
  LOGIN: "api/auth/login",
};

const DEVELOPMENT = {
  API_URL_REGISTER: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.REGISTER}`,
  API_URL_LOGIN: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.LOGIN}`,
};

const Constants = DEVELOPMENT;

export { Constants, ENDPOINTS };
