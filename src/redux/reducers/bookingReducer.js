import { SET_BOOKING_MODAL_VISIBLE, SET_BOOKING_STEP_1 } from "../type";
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
    default:
      return state;
  }
};

export default bookingReducer;
