import { GlobalActions, SET_LOADING_STATUS } from "./../actionTypes/global";
interface GlobalState {
  loading: boolean;
}

const initialState: GlobalState = {
  loading: false,
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
    default:
      return state;
  }
};
