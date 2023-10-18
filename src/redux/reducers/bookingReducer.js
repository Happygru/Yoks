import {
  SET_ADDONS,
  SET_BOOKING_MODAL_VISIBLE,
  SET_BOOKING_STEP_1,
  SET_FLEET_LIST,
  SET_VEHICLE_ID
} from "../type";
import moment from "moment";

const initialState = {
  visiblebookingmodal: false,
  rtype: 2, // 2: whole day, 1: hourly day
  startdate: moment(new Date()),
  starttime: moment(new Date()),
  enddate: moment(new Date()),
  endtime: moment(new Date()),
  pickupLocation: {
    value: "Accra",
    label: "Accra",
  },
  dropoffLocation: {
    value: "Kumasi",
    label: "Kumasi",
  },
  serviceType: {
    label: "Self-Drive",
    value: "self-drive",
  },
  serviceHourly: {
    label: "1 Hr",
    value: 1,
  },
  fleet_list: [],
  addons: [],
  vehicle_id: ''
};

const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BOOKING_MODAL_VISIBLE:
      return {
        ...state,
        visiblebookingmodal: payload,
      };
    case SET_BOOKING_STEP_1:
      const {
        rtype,
        startdate,
        starttime,
        enddate,
        endtime,
        pickupLocation,
        dropoffLocation,
        serviceHourly,
        serviceType,
      } = payload;
      return {
        ...state,
        rtype,
        startdate,
        starttime,
        enddate,
        endtime,
        pickupLocation,
        dropoffLocation,
        serviceHourly,
        serviceType,
      };
    case SET_FLEET_LIST:
      return {
        ...state,
        fleet_list: payload,
      };
    case SET_ADDONS:
      return {
        ...state,
        addons: payload,
      };
    case SET_VEHICLE_ID:
      return {
        ...state,
        vehicle_id: payload,
      }
    default:
      return state;
  }
};

export default bookingReducer;
