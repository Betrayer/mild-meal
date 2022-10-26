import { put, all, takeLatest, AllEffect, call } from "redux-saga/effects";
import { getRandomRecipes, getRecipe, searchByKeywords } from "../../api";
import { setLoadingStatus } from "../actions/global";
import {
  getChosenRecipeResponse,
  getRecipesResponse,
  getRecipesByKeywordsResponse,
} from "../actions/recipes";
import {
  GetChosenRecipeAction,
  GetRecipeByKeywordAction,
  GET_RECIPES,
  GET_CHOSEN_RECIPE,
  GET_RECIPES_BY_KEYWORDS,
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

function* searchResults(action: GetRecipeByKeywordAction) {
  try {
    // yield put(setLoadingStatus(true));
    const data: {} | [] = yield call(searchByKeywords, action.payload);
    console.log(data);
    yield put(getRecipesByKeywordsResponse(data));
  } catch (error) {
    console.log(error);
  } finally {
    // yield put(setLoadingStatus(false));
  }
}

function* watchSearchResults() {
  yield takeLatest(GET_RECIPES_BY_KEYWORDS, searchResults);
}



export default function* recipesSagas(): Generator<AllEffect<Generator>, void> {
  yield all([watchRandomRecipes(), watchChosenRecipe(), watchSearchResults()]);
}
