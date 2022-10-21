import { put, all, takeLatest, AllEffect, call } from "redux-saga/effects";
import { getRandomRecipes, getRecipe } from "../../api";
import { setLoadingStatus } from "../actions/global";
import {
  getChosenRecipeResponse,
  getRecipesResponse,
} from "../actions/recipes";
import {
  GetChosenRecipeAction,
  GET_CHOSEN_RECIPE,
  GET_RECIPES,
} from "../actionTypes/recipes";

function* randomRecipes() {
  try {
    // yield put(setLoadingStatus(true));
    const data: {} | [] = yield call(getRandomRecipes);
    console.log(data);
    yield put(getRecipesResponse(data));
  } catch (error) {
    console.log(error);
  } finally {
    // yield put(setLoadingStatus(false));
  }
}

function* watchRandomRecipes() {
  yield takeLatest(GET_RECIPES, randomRecipes);
}

function* chosenRecipe(action: GetChosenRecipeAction) {
  try {
    // yield put(setLoadingStatus(true));
    const data: {} | [] = yield call(getRecipe, action.payload);
    console.log(data);
    yield put(getChosenRecipeResponse(data));
  } catch (error) {
    console.log(error);
  } finally {
    // yield put(setLoadingStatus(false));
  }
}

function* watchChosenRecipe() {
  yield takeLatest(GET_CHOSEN_RECIPE, chosenRecipe);
}

export default function* recipesSagas(): Generator<AllEffect<Generator>, void> {
  yield all([watchRandomRecipes(), watchChosenRecipe()]);
}
