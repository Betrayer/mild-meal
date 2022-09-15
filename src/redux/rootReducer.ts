import { combineReducers } from "redux";
import { globalReducer } from "./reducers/global";

const RootReducer = combineReducers({
  global: globalReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
