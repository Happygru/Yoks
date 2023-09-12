import { SET_LOADING } from "../type";

const initialState = {
  isLoading: true,
};

const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
