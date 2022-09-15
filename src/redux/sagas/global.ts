import { put, delay, all, takeLatest, AllEffect } from "redux-saga/effects";
import {
  SetLoadingStatusAction,
  SET_LOADING_STATUS,
} from "../actionTypes/global";
import { setLoadingStatus } from "./../actions/global";

function* loading(action: SetLoadingStatusAction) {
  try {
    yield put(setLoadingStatus(true));
    yield delay(3000);
    yield put(setLoadingStatus(false));
  } catch (error) {
    console.log(error);
  }
}

function* watchLoading() {
  yield takeLatest(SET_LOADING_STATUS, loading);
}

export default function* globalSagas(): Generator<AllEffect<Generator>, void> {
  yield all([watchLoading()]);
}
