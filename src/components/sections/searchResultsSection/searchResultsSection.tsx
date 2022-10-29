import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import NextPageButton from "../../../components/buttons/nextPageButton/nextPageButton";
import RecipeCard from "../../recipeCard/recipeCard";
import "./searchResultsSection.scss";
import { sliceHelper } from "../../../helpers/sliceHelper";
import GoBack from "../../buttons/navigateButtons/navigateButtons";

const SearchResultsSection = () => {
  const [searchPageContent, setSearchPageContent] = useState([]);

  const searchResults = useSelector(
    (state: RootState) => state.recipes.searchResults
  );

  const tagSearchResults = useSelector(
    (state: RootState) => state.recipes.tagSearchResults
  );

  const [sliceParams, setSliceParams] = useState({
    from: 0,
    to: sliceHelper,
  });

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
        {searchPageContent
          .slice(sliceParams.from, sliceParams.to)
          .map((recipe: any, index: number) => (
            <RecipeCard recipe={recipe} key={index} />
          ))}
        <NextPageButton
          sliceParams={sliceParams}
          setSliceParams={setSliceParams}
          sliceHelper={sliceHelper}
        />
      </ul>
    </section>
  );
};

export default SearchResultsSection;
