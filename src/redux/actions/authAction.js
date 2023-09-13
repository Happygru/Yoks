import { toast } from "react-toastify";
import {
  getCookie,
  setCookie,
  stringConstant,
  toast_options,
} from "../../utils/constants";
import {
  signup_corporate,
  signup_individual,
  signin,
  validate_token,
} from "../../utils/webAPIs";
import yaxios from "../../utils/yaxios";
import { SET_LOADING, SIGN_IN, LOG_OUT } from "../type";

export const signUp = (dispatch, postData, accountType, navigate) => {
  yaxios
    .post(
      accountType !== "Individual" ? signup_corporate : signup_individual,
      postData
    )
    .then((res) => {
      if (res.status === 200) {
        if (res.data.status === "success") {
          toast.success(res.data.message, toast_options);
          navigate("/signin");
        } else {
          toast.warning(res.data.message, toast_options);
        }
      } else {
        toast.error(stringConstant.failed_register, toast_options);
      }
      dispatch({ type: SET_LOADING, payload: false });
    })
    .catch((err) => {
      dispatch({ type: SET_LOADING, payload: false });
      toast.error(stringConstant.request_error, toast_options);
    });
};

export const signIn = (dispatch, postData, navigate) => {
  yaxios
    .post(signin, postData)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.status === "failed") {
          toast.error(res.data.message, toast_options);
        } else {
          toast.success(stringConstant.success_login, toast_options);
          dispatch({ type: SIGN_IN, payload: res.data.customer });
          setCookie("token", res.data.token);
          navigate("/");
        }
      } else toast.error(stringConstant.failed_login, toast_options);
      dispatch({ type: SET_LOADING, payload: false });
    })
    .catch((err) => {
      dispatch({ type: SET_LOADING, payload: false });
      toast.error(stringConstant.request_error, toast_options);
    });
};

export const getInfoByToken = (dispatch, isVerify = false, navigate) => {
  yaxios
    .post(validate_token)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.status === "failed") {
          if (getCookie("token").length > 0)
            toast.error(res.data.message, toast_options);
          dispatch({ type: LOG_OUT, payload: null });
          if (isVerify) navigate("/signin");
        } else {
          dispatch({ type: SIGN_IN, payload: res.data.data.customer });
        }
        dispatch({ type: SET_LOADING, payload: false });
      } else {
        toast.error(stringConstant.request_error, toast_options);
        dispatch({ type: LOG_OUT, payload: null });
        if (isVerify) navigate("/signin");
      }
    })
    .catch((err) => {
      dispatch({ type: LOG_OUT, payload: null });
    });
};