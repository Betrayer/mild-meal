export const SET_LOADING_STATUS = "SET_LOADING_STATUS";

export type SetLoadingStatusAction = {
  type: typeof SET_LOADING_STATUS;
  payload: boolean;
};

export type GlobalActions = SetLoadingStatusAction;
