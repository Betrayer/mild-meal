import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import RecipeCard from "../recipeCard/recipeCard";
import "./trendingSection.scss";

const TrendingSection: FC = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <section className={`trending-section ${currentThemeColor}`}>
      <span className="trending-section__title">trending recipes</span>
      <div className="trending-section__content-block">
        {window.innerWidth < 1024 && window.innerWidth >= 768 ? (
          <>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </>
        ) : (
          <>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </>
        )}
      </div>
    </section>
  );
};

export default TrendingSection;
