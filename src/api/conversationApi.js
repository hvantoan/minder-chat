import axiosClient from "./axiosClient";

const module = "conversations";

const conversationApi = {
  get: (id) => {
    const url = `/${module}/${id}`;
    return axiosClient.get(url);
  },
  list: (params) => {
    const url = `/${module}`;
    return axiosClient.get(url, params);
  },
  create: (data) => {
    const url = `/${module}/create`;
    return axiosClient.post(url, data);
  },
  update: (data) => {
    const url = `/${module}/update`;
    return axiosClient.post(url, data);
  },
};

export default conversationApi;
