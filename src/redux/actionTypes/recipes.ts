import { Recipe } from "../../types/types";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_RESPONCE = "GET_RECIPES_RESPONCE";
export const GET_CHOSEN_RECIPE = "GET_CHOSEN_RECIPE";
export const GET_CHOSEN_RECIPE_RESPONCE = "GET_CHOSEN_RECIPE_RESPONCE";
export const GET_RECIPES_BY_KEYWORDS = "GET_RECIPES_BY_KEYWORDS";
export const GET_RECIPES_BY_KEYWORDS_RESPONSE =
  "GET_RECIPES_BY_KEYWORDS_RESPONSE";

export type GetRecipesAction = {
  type: typeof GET_RECIPES;
};

export type GetRecipesResponseAction = {
  type: typeof GET_RECIPES_RESPONCE;
  payload: any;
};

export type GetChosenRecipeAction = {
  type: typeof GET_CHOSEN_RECIPE;
  payload: number;
};

export type GetChosenRecipeResponseAction = {
  type: typeof GET_CHOSEN_RECIPE_RESPONCE;
  payload: any;
};

export type GetRecipeByKeywordAction = {
  type: typeof GET_RECIPES_BY_KEYWORDS;
  payload: string;
};

export type GetRecipeByKeywordResponseAction = {
  type: typeof GET_RECIPES_BY_KEYWORDS_RESPONSE;
  payload: any;
};

export type RecipesActions =
  | GetRecipesAction
  | GetRecipesResponseAction
  | GetChosenRecipeAction
  | GetChosenRecipeResponseAction
  | GetRecipeByKeywordAction
  | GetRecipeByKeywordResponseAction;
