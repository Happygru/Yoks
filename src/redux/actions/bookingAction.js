import { stringConstant, toast_options } from "../../utils/constants";
import { SET_BOOKING_MODAL_VISIBLE, SET_VEHICLE_ID } from "../type";
import { get_wholeday_booking, get_hourly_booking } from "../../utils/webAPIs";
import { toast } from "react-toastify";
import { SET_LOADING, SET_FLEET_LIST, SET_ADDONS } from "../../redux/type";
import axios from "axios";
import { BACKEND_URL } from "../../utils/config";

export const visibleBookingModal = (dispatch, visibility) => {
  dispatch({ type: SET_BOOKING_MODAL_VISIBLE, payload: visibility });
};

export const getVehicleAllList = (dispatch, postData, rtype) => {
  axios
    .post(`${BACKEND_URL}${ rtype === 1 ? get_hourly_booking : get_wholeday_booking }`, postData)
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

export const setVehicleID = (dispatch, vehicleID) => {
  dispatch({ type: SET_VEHICLE_ID, payload: vehicleID });
}