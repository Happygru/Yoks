import { combineReducers } from "@reduxjs/toolkit";

import globalReducer from "./globalReducer";
import authReducer from "./authReducer";
import fleetReducer from "./fleetReducer";
import bookingReducer from "./bookingReducer";

const mainReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  fleet: fleetReducer,
  book: bookingReducer,
});

export default mainReducer