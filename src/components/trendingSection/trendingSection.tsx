import React, { FC } from "react";
import RecipeCard from "../recipeCard/recipeCard";
import "./trendingSection.scss";

const TrendingSection: FC = () => {
  return (
    <section className="trending-section">
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
