import { toast } from "react-toastify";
import { stringConstant, toast_options } from "../../utils/constants";
import { get_fleet } from "../../utils/webAPIs";
import axios from "axios";
import { GET_CAR_LIST, SET_LOADING } from "../type";
import { BACKEND_URL } from "../../utils/config";

export const getCarList = (dispatch) => {
  axios
    .get(`${BACKEND_URL}${get_fleet}`)
    .then((res) => {
      if (res.status === 200) {
        const { categories, vehicles } = res.data;
        const result = categories.map((category) => ({
          ...category,
          vehicles: vehicles.filter(
            (vehicle) => vehicle.category === category.id
          ),
        }));
        dispatch({ type: GET_CAR_LIST, payload: result });
      } else {
        toast.error(stringConstant.failed_register, toast_options);
      }
      dispatch({ type: SET_LOADING, payload: false });
    })
    .catch((err) => console.log(err));
};
