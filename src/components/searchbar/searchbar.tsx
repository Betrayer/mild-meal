import React, { FC, useRef } from "react";
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

  return (
    <form className="searchbar" onSubmit={(e) => handleSearchSubmit(e)}>
      {window.innerWidth >= 768 ? (
        inputIsVisible && (
          <input
            ref={inputValueRef}
            className="searchbar-input"
            placeholder="search by name"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        )
      ) : (
        <input
          ref={inputValueRef}
          className="searchbar-input"
          placeholder="search by name"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      )}
      {window.innerWidth >= 768 && (
        <button
          className="searchbar-button"
          onClick={(e) => handleSearchButton(e)}
        ></button>
      )}
    </form>
  );
};

export default Searchbar;
