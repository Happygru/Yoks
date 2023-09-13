import { SET_BOOKING_MODAL_VISIBLE } from "../type";

const initialState = {
  visiblebookingmodal: false,
};

const fleetReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BOOKING_MODAL_VISIBLE:
      return {
        ...state,
        visiblebookingmodal: payload,
      };
    default:
      return state;
  }
};

export default fleetReducer;
