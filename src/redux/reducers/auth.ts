import { AuthActions, LOGIN_RESPONCE } from "../actionTypes/auth";

interface AuthState {
  user: {
    accessToken: string;
  };
}

const initialState: AuthState = {
  user: {
    accessToken: "",
  },
};

export const authReducer = (
  state = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case LOGIN_RESPONCE:
      return {
        ...state,
        user: {
          accessToken: action.payload,
        },
      };
    default:
      return state;
  }
};
