import { ENDPOINTS } from "../constants/endpoints/endpointURL";
import axiosClient from "./axiosClient";

const messageApi = {
  sendMessage: (body) => axiosClient.post(ENDPOINTS.SEND_MESSAGE, body),
};

export default messageApi;
