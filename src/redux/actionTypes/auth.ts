export const LOGIN_RESPONCE = "LOGIN_RESPONCE";

export type LoginResponceAction = {
  type: typeof LOGIN_RESPONCE;
  payload: string;
};

export type AuthActions = LoginResponceAction;
