import { GlobalActions, SET_LOADING_STATUS, THEME_COLOR } from "../actionTypes/global";

export const setLoadingStatus = (payload: boolean): GlobalActions => ({
  type: SET_LOADING_STATUS,
  payload,
});

export const themeColor = (payload: string): GlobalActions => ({
  type: THEME_COLOR,
  payload,
});