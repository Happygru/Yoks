import { toast } from "react-toastify";
import { stringConstant, toast_options } from "../../utils/constants";
import { get_fleet } from "../../utils/webAPIs";
import yaxios from "../../utils/yaxios";
import { GET_CAR_LIST, SET_LOADING } from "../type";

export const getCarList = (dispatch) => {
  yaxios
    .get(get_fleet)
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
