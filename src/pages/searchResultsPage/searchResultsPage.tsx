import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import SearchResultsSection from "../../components/sections/searchResultsSection/searchResultsSection";
import "./searchResultsPage.scss";

const SearchResultsPage = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <div className={`search-results-page ${currentThemeColor}`}>
      <SearchResultsSection />
    </div>
  );
};

export default SearchResultsPage;
