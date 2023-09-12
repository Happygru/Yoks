import { combineReducers } from "@reduxjs/toolkit";

import globalReducer from "./globalReducer";
import authReducer from "./authReducer";
import fleetReducer from "./fleetReducer";

const mainReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  fleet: fleetReducer,
});

export default mainReducer