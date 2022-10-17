import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions/recipes";
import { RootState } from "../../redux/rootReducer";
import RecipeCard from "../recipeCard/recipeCard";
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
  console.log(randomRecipes);
  console.log(randomRecipes.slice(0, 2));

  return (
    <section className={`trending-section ${currentThemeColor}`}>
      {/* <span className="trending-section__title">trending recipes</span> */}
      <ul className="trending-section__content-block">
        {window.innerWidth >= 768 && window.innerWidth < 1024
          ? randomRecipes
              .slice(0, 3)
              .map((recipe: any) => <RecipeCard recipe={recipe} />)
          : window.innerWidth >= 1024
          ? randomRecipes
              .slice(0, 4)
              .map((recipe: any) => <RecipeCard recipe={recipe} />)
          : randomRecipes.map((recipe: any) => <RecipeCard recipe={recipe} />)}
      </ul>
    </section>
  );
};

export default TrendingSection;
