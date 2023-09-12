import { GET_CAR_LIST } from "../type";

const initialState = {
  carList: [],
};

const fleetReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CAR_LIST:
      return {
        ...state,
        carList: payload,
      };
    default:
      return state;
  }
};

export default fleetReducer;
