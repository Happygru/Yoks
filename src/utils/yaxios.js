import axios from "axios";
import { BACKEND_URL, getCookie } from "./constants";

const yaxios = axios.create({
  baseURL: BACKEND_URL,
});

yaxios.interceptors.request.use(
  (config) => {
    let cookie = getCookie("token");
    config.headers["Content-Type"] =
      config.data && config.data instanceof FormData
        ? "multipart/form-data"
        : "application/json";
    config.headers["Accept"] = "*/*";
    let newcookie = cookie ? cookie : "";
    if (newcookie.length > 0) {
      config.headers["Authorization"] = newcookie;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default yaxios;
