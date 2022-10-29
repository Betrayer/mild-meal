import React, { FC, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import "./searchbar.scss";

interface SearchbarProps {
  handleSearchSubmit: (e: React.FormEvent) => void;
  handleSearchButton: (e: React.FormEvent) => void;
  inputIsVisible: boolean;
  setInputValue: (value: string) => void;
}

const Searchbar: FC<SearchbarProps> = ({
  handleSearchSubmit,
  handleSearchButton,
  inputIsVisible,
  setInputValue,
}) => {
  const inputValueRef = useRef(null);

  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <form
      className={`searchbar ${currentThemeColor}`}
      onSubmit={(e) => handleSearchSubmit(e)}
    >
      {inputIsVisible && (
        <input
          // pattern="[a-zA-Za]{3,}"
          minLength={3}
          type="text"
          ref={inputValueRef}
          className="searchbar-input"
          placeholder="search by name"
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}

      {window.innerWidth >= 768 && (
        <button
          type="submit"
          className="searchbar-button"
          onClick={(e) => handleSearchButton(e)}
        />
      )}
    </form>
  );
};

export default Searchbar;
