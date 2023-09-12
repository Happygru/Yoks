import { removeCookie } from "../../utils/constants";
import { SIGN_IN, LOG_OUT } from "../type";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case LOG_OUT:
      removeCookie("token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
