import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import NextPageButton from "../nextPageButton/nextPageButton";
import RecipeCard from "../recipeCard/recipeCard";
import "./searchResultsSection.scss";

const SearchResultsSection = () => {
  const searchResults = useSelector(
    (state: RootState) => state.recipes.searchResults
  );

  const [sliceMainValue, setSliceMainValue] = useState(0);

  const [sliceSecondValue, setSliceSecondValue] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1024
      ? 8
      : window.innerWidth >= 1024
      ? 11
      : 12
  );

  return (
    <section>
      <span className="search-results-section__title">Results</span>
      <ul className="search-results-section__list">
        {window.innerWidth >= 768 && window.innerWidth < 1024
          ? searchResults
              .slice(sliceMainValue, sliceSecondValue)
              .map((recipe: any, index: number) => (
                <RecipeCard recipe={recipe} key={index} />
              ))
          : window.innerWidth >= 1024
          ? searchResults
              .slice(sliceMainValue, sliceSecondValue)
              .map((recipe: any, index: number) => (
                <RecipeCard recipe={recipe} key={index} />
              ))
          : searchResults
              .slice(sliceMainValue, sliceSecondValue)
              .map((recipe: any, index: number) => (
                <RecipeCard recipe={recipe} key={index} />
              ))}
        <NextPageButton
          sliceMainValue={sliceMainValue}
          setSliceMainValue={setSliceMainValue}
          sliceSecondValue={sliceSecondValue}
          setSliceSecondValue={setSliceSecondValue}
        />
      </ul>
    </section>
  );
};

export default SearchResultsSection;
