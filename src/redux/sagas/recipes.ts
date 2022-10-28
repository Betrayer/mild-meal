import { put, all, takeLatest, AllEffect, call } from "redux-saga/effects";
import { getRandomRecipes, getRecipe, searchByKeywords, searchByTag } from "../../api";
import { setLoadingStatus } from "../actions/global";
import {
  getChosenRecipeResponse,
  getRecipesResponse,
  getRecipesByKeywordsResponse,
  getRecipesByTagsResponse,
} from "../actions/recipes";
import {
  GET_RECIPES,
  GetChosenRecipeAction,
  GET_CHOSEN_RECIPE,
  GetRecipeByKeywordAction,
  GET_RECIPES_BY_KEYWORDS,
  GetRecipeByTagAction,
  GET_RECIPES_BY_TAG,
} from "../actionTypes/recipes";

function* randomRecipes() {
  try {
    // yield put(setLoadingStatus(true));
    const data: {} | [] = yield call(getRandomRecipes);
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

function* tagSearchResults(action: GetRecipeByTagAction) {
  try {
    // yield put(setLoadingStatus(true));
    const data: {} | [] = yield call(searchByTag, action.payload);
    yield put(getRecipesByTagsResponse(data));
  } catch (error) {
    console.log(error);
  } finally {
    // yield put(setLoadingStatus(false));
  }
}

function* watchTagSearchResults() {
  yield takeLatest(GET_RECIPES_BY_TAG, tagSearchResults);
}

export default function* recipesSagas(): Generator<AllEffect<Generator>, void> {
  yield all([watchRandomRecipes(), watchChosenRecipe(), watchSearchResults(), watchTagSearchResults()]);
}
