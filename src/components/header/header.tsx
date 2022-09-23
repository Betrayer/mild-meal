import React, { FC, useState } from "react";
import ThemeChangeButton from "../themeChangeButton/themeChangeButton";
import "./header.scss";

const Header: FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [categoriesAreOpened, setCategoriesAreOpened] = useState(false);
  const [searchIsOpened, setSearchIsOpened] = useState(true);

  const handleMenuClick = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  const handleCategoriesAndSearchClick = () => {
    setCategoriesAreOpened(!categoriesAreOpened);
    setSearchIsOpened(!searchIsOpened);
  };

  const searchAlert = () => {
    alert("Search!");
  };
  const loginAlert = () => {
    alert("LogIn!");
  };

  return (
    <header className="header">
      <div className="header_logo">
        <span className="header_logo-name">mildmeal</span>
        <span className="header_logo-tagline">your best kitchen assistant</span>
      </div>

      <div
        className={`header_menu-button ${
          menuIsVisible ? "closeMenu" : "openMenu"
        }`}
        onClick={handleMenuClick}
      ></div>

      <div
        className={`header_categories-button_wrapper wrapper ${
          categoriesAreOpened ? "openedCategories" : ""
        }`}
      >
        <div
          className={`header_categories-button ${
            categoriesAreOpened ? "hiddenElement" : ""
          }`}
          onClick={
            !categoriesAreOpened ? handleCategoriesAndSearchClick : undefined
          }
        ></div>
      </div>

      <div
        className={`header_search-form_wrapper wrapper ${
          searchIsOpened ? "openedSearch" : ""
        }`}
      >
        <div
          className="header_search-form"
          onClick={
            searchIsOpened ? searchAlert : handleCategoriesAndSearchClick
          }
        ></div>
      </div>

      <div className="header_login-button_wrapper wrapper">
        <span className="header_login-button" onClick={loginAlert}>
          log in
        </span>
        <ThemeChangeButton />
      </div>
    </header>
  );
};

export default Header;
