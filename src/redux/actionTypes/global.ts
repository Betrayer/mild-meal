export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const THEME_COLOR = "THEME_COLOR";

export type SetLoadingStatusAction = {
  type: typeof SET_LOADING_STATUS;
  payload: boolean;
};

export type ThemeSwitchAction = {
  type: typeof THEME_COLOR;
  payload: string;
};

export type GlobalActions = SetLoadingStatusAction | ThemeSwitchAction;
