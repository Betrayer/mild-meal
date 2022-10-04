import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth";
import { globalReducer } from "./reducers/global";

const RootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
