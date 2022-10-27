import {
  GET_RECIPES,
  GET_RECIPES_RESPONCE,
  GET_CHOSEN_RECIPE,
  GET_CHOSEN_RECIPE_RESPONCE,
  GET_RECIPES_BY_KEYWORDS,
  GET_RECIPES_BY_KEYWORDS_RESPONSE,
  GET_RECIPES_BY_TAG,
  GET_RECIPES_BY_TAG_RESPONSE,
  RecipesActions,
} from "../actionTypes/recipes";
import { Recipe } from "../../types/types";

export const getRecipes = (): RecipesActions => ({
  type: GET_RECIPES,
});

export const getRecipesResponse = (payload: any): RecipesActions => ({
  type: GET_RECIPES_RESPONCE,
  payload,
});

export const getChosenRecipe = (payload: number): RecipesActions => ({
  type: GET_CHOSEN_RECIPE,
  payload,
});

export const getChosenRecipeResponse = (payload: any): RecipesActions => ({
  type: GET_CHOSEN_RECIPE_RESPONCE,
  payload,
});

export const getRecipesByKeywords = (payload: string): RecipesActions => ({
  type: GET_RECIPES_BY_KEYWORDS,
  payload,
});

export const getRecipesByKeywordsResponse = (payload: any): RecipesActions => ({
  type: GET_RECIPES_BY_KEYWORDS_RESPONSE,
  payload,
});

export const getRecipesByTag = (payload: string): RecipesActions => ({
  type: GET_RECIPES_BY_TAG,
  payload,
});

export const getRecipesByTagsResponse = (payload: any): RecipesActions => ({
  type: GET_RECIPES_BY_TAG_RESPONSE,
  payload,
});
