import { ENDPOINTS } from "../constants/endpoints/endpointURL";
import { axiosNotToken } from "./axiosClient";

const module = "auth";

const authApi = {
  login: (data) => axiosNotToken.post(ENDPOINTS.LOGIN, data),
  register: (body) => axiosNotToken.post(ENDPOINTS.REGISTER, body),
  forgotPassword: (body) => {
    const url = `/${module}/register`;
    return axiosNotToken.post(url, body);
  },
  verify: (otp) => {
    const url = `/${module}/register?opt=${otp}`;
    return axiosNotToken.get(url);
  },
};

export default authApi;
