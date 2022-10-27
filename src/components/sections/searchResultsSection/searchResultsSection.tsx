import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import NextPageButton from "../../../components/buttons/nextPageButton/nextPageButton";
import RecipeCard from "../../recipeCard/recipeCard";
import "./searchResultsSection.scss";
import { useNavigate } from "react-router-dom";

const SearchResultsSection = () => {
  const [searchPageContent, setSearchPageContent] = useState([]);

  const searchResults = useSelector(
    (state: RootState) => state.recipes.searchResults
  );

  const tagSearchResults = useSelector(
    (state: RootState) => state.recipes.tagSearchResults
  );

  const [sliceMainValue, setSliceMainValue] = useState(0);

  const [sliceSecondValue, setSliceSecondValue] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1024
      ? 8
      : window.innerWidth >= 1024
      ? 11
      : 12
  );

  useEffect(() => {
    setSearchPageContent(tagSearchResults);
  }, [tagSearchResults]);

  useEffect(() => {
    setSearchPageContent(searchResults);
  }, [searchResults]);

  return (
    <section>
      <span className="search-results-section__title">Results</span>
      <ul className="search-results-section__list">
        {window.innerWidth >= 768 && window.innerWidth < 1024
          ? searchPageContent
              .slice(sliceMainValue, sliceSecondValue)
              .map((recipe: any, index: number) => (
                <RecipeCard recipe={recipe} key={index} />
              ))
          : window.innerWidth >= 1024
          ? searchPageContent
              .slice(sliceMainValue, sliceSecondValue)
              .map((recipe: any, index: number) => (
                <RecipeCard recipe={recipe} key={index} />
              ))
          : searchPageContent
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
