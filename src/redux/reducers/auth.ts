import {
  AuthActions,
  LOGIN_RESPONCE,
  REGISTER_RESPONCE,
  IS_AUTH,
} from "../actionTypes/auth";

interface AuthState {
  user: {
    accessToken: string;
  };
  isAuth: boolean;
}

const initialState: AuthState = {
  user: {
    accessToken: "",
  },
  isAuth: false,
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

    case REGISTER_RESPONCE:
      return {
        ...state,
        user: {
          accessToken: action.payload,
        },
      };

    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
