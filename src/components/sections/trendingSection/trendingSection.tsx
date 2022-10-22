import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRecipes } from "../../../redux/actions/recipes";
import { RootState } from "../../../redux/rootReducer";
import RecipeCard from "../../recipeCard/recipeCard";
import "./trendingSection.scss";

const TrendingSection: FC = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getRecipes());
  }, []);

  const randomRecipes = useSelector(
    (state: RootState) => state.recipes.randomRecipes
  );

  return (
    <section className={`trending-section ${currentThemeColor}`}>
      <ul className="trending-section__content-block">
        {window.innerWidth >= 768 && window.innerWidth < 1024
          ? randomRecipes
              .slice(0, 3)
              .map((recipe: any, index: number) => (
                <RecipeCard recipe={recipe} key={index} />
              ))
          : window.innerWidth >= 1024
          ? randomRecipes
              .slice(0, 4)
              .map((recipe: any, index: number) => (
                <RecipeCard recipe={recipe} key={index} />
              ))
          : randomRecipes.map((recipe: any, index: number) => (
              <RecipeCard recipe={recipe} key={index} />
            ))}
      </ul>
    </section>
  );
};

export default TrendingSection;
