import Cookies from "js-cookie";

export const BACKEND_URL = "https://test.yoksghana.com/api/web/v1/";

export const isPhoneNumber = (phoneNumber) => {
  const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/; // regex for international phone numbers
  return regex.test(phoneNumber);
};

export const isEmail = (email) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
};

export const checkPassword = (password) => {
  return password.length > 1;
};

export const toast_options = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const stringConstant = {
  request_error: "Request Error!",
  //Auth

  // State
  success_register: "Success to register",
  failed_register: "Failed to register",

  success_login: "Success to login",
  failed_login: "Failed to login",

  //OurFleet
  failed_load_carlist: "Failed to load fleet data",
};

export const setCookie = (key, value, expire = { expires: 300000 }) => {
  Cookies.set(key, value, expire);
};

export const getCookie = (key) => {
  return Cookies.get(key);
};

export const removeCookie = (key) => {
  Cookies.remove(key);
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
