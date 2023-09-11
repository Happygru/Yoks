import { toast } from "react-toastify";
import { stringConstant, toast_options } from "../../utils/constants";
import {
  signup_corporate,
  signup_individual,
  signin,
} from "../../utils/webAPIs";
import yaxios from "../../utils/yaxios";

export const signUp = (dispatch, postData, accountType) => {
  yaxios
    .post(
      accountType !== "Individual" ? signup_corporate : signup_individual,
      postData
    )
    .then((res) => {
      if (res.status === 200) {
        if (res.data.status === "success") {
          toast.success(res.data.message, toast_options);
          window.location.reload("/signin");
        } else {
          toast.warning(res.data.message, toast_options);
        }
      } else {
        toast.error(stringConstant.failed_register, toast_options);
      }
    })
    .catch((err) => console.log(err));
};

export const signIn = (dispatch, postData) => {
  yaxios
    .get(signin, postData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
