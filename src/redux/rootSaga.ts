import { all, AllEffect } from "redux-saga/effects";
import globalSagas from "./sagas/global";

function* rootSaga(): Generator<AllEffect<Generator>, void> {
  yield all([globalSagas()]);
}

export default rootSaga;
