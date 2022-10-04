import { AuthActions, LOGIN_RESPONCE } from "../actionTypes/auth";

export const loginResponce = (payload: string): AuthActions => ({
  type: LOGIN_RESPONCE,
  payload,
});
