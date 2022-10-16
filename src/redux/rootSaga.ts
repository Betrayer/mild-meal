import { all, AllEffect } from "redux-saga/effects";
import recipesSagas from "./sagas/recipes";

function* rootSaga(): Generator<AllEffect<Generator>, void> {
  yield all([recipesSagas()]);
}

export default rootSaga;
