import { GlobalActions, SET_LOADING_STATUS } from "../actionTypes/global";

export const setLoadingStatus = (payload: boolean): GlobalActions => ({
  type: SET_LOADING_STATUS,
  payload,
});
