import axios from "axios";
import { getCookie } from "./index.js";

const service = axios.create({
  baseURL: "http://123.206.55.50:8888/"
});

service.interceptors.request.use(
  config => {
    if (getCookie()) {
      config.headers["x-nideshop-token"] = getCookie();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error);
  }
);

export default service;
