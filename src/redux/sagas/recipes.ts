import { put, all, takeLatest, AllEffect, call } from "redux-saga/effects";
import { getRandomRecipes } from "../../api";
import { setLoadingStatus } from "../actions/global";
import { getRecipesResponse } from "../actions/recipes";
import { GET_RECIPES } from "../actionTypes/recipes";

function* randomRecipes() {
  try {
    yield put(setLoadingStatus(true));
    const data: {} | [] = yield call(getRandomRecipes);
    console.log(data);
    yield put(getRecipesResponse(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoadingStatus(true));
  }
}

function* watchRandomRecipes() {
  yield takeLatest(GET_RECIPES, randomRecipes);
}

export default function* recipesSagas(): Generator<AllEffect<Generator>, void> {
  yield all([watchRandomRecipes()]);
}
