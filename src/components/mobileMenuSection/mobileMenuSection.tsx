import React, { FC, useState } from "react";
import LoginButton from "../loginButton/loginButton";
import Searchbar from "../searchbar/searchbar";
import TaglistWrapper from "../taglist/taglistWrapper/taglistWrapper";
import ThemeChangeButton from "../themeChangeButton/themeChangeButton";

import "./mobileMenuSection.scss";

interface MobileMenuProps {
  handleTagsOpeningButton: (e: React.FormEvent) => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
  handleSearchButton: (e: React.FormEvent) => void;
  setInputValue: (value: string) => void;
  handleLoginButton: () => void;
  inputIsVisible: boolean;
}

const MobileMenuSection: FC<MobileMenuProps> = ({
  handleTagsOpeningButton,
  handleSearchSubmit,
  handleSearchButton,
  inputIsVisible,
  setInputValue,
  handleLoginButton,
}) => {
  const [tagsAreOpened, setTagsAreOpened] = useState(false);
  const handleMenuTagsButton = () => {
    setTagsAreOpened(!tagsAreOpened);
  };

  return (
    <ul className="mobile-menu">
      <li className="mobile-menu-item">
        <Searchbar
          handleSearchSubmit={handleSearchSubmit}
          handleSearchButton={handleSearchButton}
          inputIsVisible={inputIsVisible}
          setInputValue={setInputValue}
        />
      </li>
      <li className="mobile-menu-item">
        <button
          className="mobile-menu-taglist-button"
          onClick={handleMenuTagsButton}
        >
          <label>{tagsAreOpened ? "▲" : "▼"}</label>search by categories
        </button>
      </li>
      {tagsAreOpened && <TaglistWrapper />}
      <li className="mobile-menu-item">
        <ThemeChangeButton />
      </li>
      <li className="mobile-menu-item">
        <LoginButton handleLoginButton={handleLoginButton} />
      </li>
    </ul>
  );
};

export default MobileMenuSection;
