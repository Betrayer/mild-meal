import { AuthActions, LOGIN_RESPONCE, REGISTER_RESPONCE } from "../actionTypes/auth";

export const loginResponce = (payload: string): AuthActions => ({
  type: LOGIN_RESPONCE,
  payload,
});

export const registerResponce = (payload: string): AuthActions => ({
  type: REGISTER_RESPONCE,
  payload,
});
