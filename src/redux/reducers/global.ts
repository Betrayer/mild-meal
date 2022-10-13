import {
  GlobalActions,
  SET_LOADING_STATUS,
  THEME_COLOR,
} from "./../actionTypes/global";

interface GlobalState {
  loading: boolean;
  themeColor: string;
}

const initialState: GlobalState = {
  loading: false,
  themeColor: "bright",
};

export const globalReducer = (
  state = initialState,
  action: GlobalActions
): GlobalState => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.payload,
      };

    case THEME_COLOR:
      return {
        ...state,
        themeColor: action.payload,
      };
    default:
      return state;
  }
};
