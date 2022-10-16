import { Recipe } from "../../types/types";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_RESPONCE = "GET_RECIPES_RESPONCE";

export type GetRecipesAction = {
  type: typeof GET_RECIPES;
};

export type GetRecipesResponseAction = {
  type: typeof GET_RECIPES_RESPONCE;
  payload: any;
};

export type RecipesActions = GetRecipesAction | GetRecipesResponseAction;
