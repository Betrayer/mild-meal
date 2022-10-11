export const LOGIN_RESPONCE = "LOGIN_RESPONCE";
export const REGISTER_RESPONCE = "REGISTER_RESPONCE";
export const IS_AUTH = "IS_AUTH"

export type LoginResponceAction = {
  type: typeof LOGIN_RESPONCE;
  payload: string;
};

export type RegisterResponceAction = {
  type: typeof REGISTER_RESPONCE;
  payload: string;
};

export type IsAuthAction = {
  type: typeof IS_AUTH;
  payload: boolean;
}


export type AuthActions = LoginResponceAction | RegisterResponceAction | IsAuthAction;
