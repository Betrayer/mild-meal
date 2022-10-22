import React from "react";
import NextPageButton from "../../buttons/nextPageButton/nextPageButton";
import RecipeCard from "../../recipeCard/recipeCard";
import "./searchResultsSection.scss";

const SearchResultsSection = () => {
  return (
    <section>
      <span className="search-results-section__title">Results for ""</span>
      <ul className="search-results-section__list">
        {/* {window.innerWidth < 768 && (
          <>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <NextPageButton />
            </li>
          </>
        )}
        {window.innerWidth >= 768 && window.innerWidth < 1024 && (
          <>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <NextPageButton />
            </li>
          </>
        )}
        {window.innerWidth >= 1024 && (
          <>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <RecipeCard />
            </li>
            <li>
              <NextPageButton />
            </li>
          </>
        )} */}
      </ul>
    </section>
  );
};

export default SearchResultsSection;
