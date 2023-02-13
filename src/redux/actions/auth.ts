import { UserData } from "../../types/types";
import {
  AuthActions,
  LOGIN_RESPONCE,
  REGISTER_RESPONCE,
  IS_AUTH,
} from "../actionTypes/auth";

export const loginResponce = (payload: UserData): AuthActions => ({
  type: LOGIN_RESPONCE,
  payload,
});

export const registerResponce = (payload: UserData): AuthActions => ({
  type: REGISTER_RESPONCE,
  payload,
});

export const isAuth = (payload: boolean): AuthActions => ({
  type: IS_AUTH,
  payload,
});
