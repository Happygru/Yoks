import { SET_BOOKING_MODAL_VISIBLE } from "../type";

export const visibleBookingModal = (dispatch, visibility) => {
  dispatch({ type: SET_BOOKING_MODAL_VISIBLE, payload: visibility });
};
