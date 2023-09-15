import { stringConstant, toast_options } from "../../utils/constants";
import { SET_BOOKING_MODAL_VISIBLE } from "../type";
import { get_booking_info } from "../../utils/webAPIs";
import { toast } from "react-toastify";
import { SET_LOADING, SET_FLEET_LIST, SET_ADDONS } from "../../redux/type";
import axios from "axios";
import { BACKEND_URL } from "../../utils/config";

export const visibleBookingModal = (dispatch, visibility) => {
  dispatch({ type: SET_BOOKING_MODAL_VISIBLE, payload: visibility });
};

export const getVehicleAllList = (dispatch, postData) => {
  axios
    .post(`${BACKEND_URL}${get_booking_info}`, postData)
    .then((res) => {
      if (res.status === 200) {
        const { addons, fleet } = res.data;
        dispatch({ type: SET_FLEET_LIST, payload: fleet });
        dispatch({ type: SET_ADDONS, payload: addons });
      } else {
        toast.error(stringConstant.failed_register, toast_options);
      }
      dispatch({ type: SET_LOADING, payload: false });
    })
    .catch((err) => console.log(err));
};
