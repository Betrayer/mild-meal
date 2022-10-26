import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import LoginButton from "../../buttons/loginButton/loginButton";
import ThemeChangeButton from "../../buttons/themeChangeButton/themeChangeButton";
import Searchbar from "../../searchbar/searchbar";
import TaglistWrapper from "../../taglist/taglistWrapper/taglistWrapper";

import "./mobileMenuSection.scss";

interface MobileMenuProps {
  handleSearchSubmit: (e: React.FormEvent) => void;
  handleSearchButton: (e: React.FormEvent) => void;
  setInputValue: (value: string) => void;
  handleLoginButton: () => void;
  inputIsVisible: boolean;
}

const MobileMenuSection: FC<MobileMenuProps> = ({
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
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <ul className={`mobile-menu ${currentThemeColor}`}>
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
      {tagsAreOpened && (
        <li>
          <TaglistWrapper />
        </li>
      )}
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
