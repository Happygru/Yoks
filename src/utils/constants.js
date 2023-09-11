export const BACKEND_URL = "https://fms.yoksghana.com/api/web/v1/";

export const isPhoneNumber = (phoneNumber) => {
  const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/; // regex for international phone numbers
  return regex.test(phoneNumber);
};

export const isEmail = (email) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
};

export const checkPassword = (password) => {
  return password.length > 7;
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
};
