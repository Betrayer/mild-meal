export const LOGIN_RESPONCE = "LOGIN_RESPONCE";
export const REGISTER_RESPONCE = "REGISTER_RESPONCE";

export type LoginResponceAction = {
  type: typeof LOGIN_RESPONCE;
  payload: string;
};

export type RegisterResponceAction = {
  type: typeof REGISTER_RESPONCE;
  payload: string;
};

export type AuthActions = LoginResponceAction | RegisterResponceAction ;
