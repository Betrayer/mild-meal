import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth";
import { globalReducer } from "./reducers/global";
import { recipesReducer } from "./reducers/recipes";

const RootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  recipes: recipesReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
