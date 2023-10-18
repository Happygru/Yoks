import { toast } from "react-toastify";
import { stringConstant, toast_options } from "../../utils/constants";
import {
  saveprofile_individual,
  saveprofile_corporate,
  save_password,
} from "../../utils/webAPIs";
import yaxios from "../../utils/yaxios";
import { SET_LOADING } from "../type";

export const saveProfile = (dispatch, postData, accountType) => {
  yaxios
    .post(
      accountType !== "Individual"
        ? saveprofile_corporate
        : saveprofile_individual,
      postData
    )
    .then((res) => {
      if (res.status === 200) {
        if (res.data.status === "success") {
          toast.success(res.data.message, toast_options);
        } else {
          toast.warning(res.data.message, toast_options);
        }
      } else {
        toast.error(stringConstant.failed_update, toast_options);
      }
      dispatch({ type: SET_LOADING, payload: false });
    })
    .catch((err) => {
      dispatch({ type: SET_LOADING, payload: false });
      toast.error(stringConstant.request_error, toast_options);
    });
};

export const savePassword = (dispatch, postData) => {
  yaxios
    .post(save_password, postData)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.status === "success") {
          toast.success(res.data.message, toast_options);
        } else {
          toast.warning(res.data.message, toast_options);
        }
      } else {
        toast.error(stringConstant.failed_update, toast_options);
      }
      dispatch({ type: SET_LOADING, payload: false });
    })
    .catch((err) => {
      dispatch({ type: SET_LOADING, payload: false });
      toast.error(stringConstant.request_error, toast_options);
    });
};
