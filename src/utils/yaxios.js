import axios from "axios";
import { BACKEND_URL } from "./constants";

const yaxios = axios.create({
  baseURL: BACKEND_URL,
});

yaxios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "*/*";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default yaxios;
