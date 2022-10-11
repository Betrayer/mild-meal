import { AuthActions, LOGIN_RESPONCE, REGISTER_RESPONCE, IS_AUTH } from "../actionTypes/auth";

export const loginResponce = (payload: string): AuthActions => ({
  type: LOGIN_RESPONCE,
  payload,
});

export const registerResponce = (payload: string): AuthActions => ({
  type: REGISTER_RESPONCE,
  payload,
});

export const isAuth = (payload: boolean): AuthActions => ({
  type: IS_AUTH,
  payload,
});
