import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import LoginButton from "../loginButton/loginButton";
import MobileMenuSection from "../mobileMenuSection/mobileMenuSection";
import Searchbar from "../searchbar/searchbar";
import Taglist from "../taglist/taglist";
import "./header.scss";

interface HeaderProps {
  handleLoginButton: () => void;
}

const Header: FC<HeaderProps> = ({ handleLoginButton }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [inputIsVisible, setInputIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleMenuClick = (): void => {
    setMenuIsVisible(!menuIsVisible);
  };

  const handleSearchSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    alert(inputValue);
  };

  const handleSearchButton = (e: React.FormEvent): void => {
    e.preventDefault();
    inputIsVisible ? alert(inputValue) : setInputIsVisible(true);
  };

  const handleTagsOpeningButton = (e: React.FormEvent): void => {
    e.preventDefault();
    setInputIsVisible(false);
  };

  const logoRedirect = (): void => {
    navigate("/");
  };

  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <header className={`header ${currentThemeColor}`}>
      <div className="header_logo" onClick={logoRedirect}>
        <span className="header_logo-name">mildmeal</span>
        <span className="header_logo-tagline">your best kitchen assistant</span>
      </div>

      <div
        className={`header_menu-button ${
          menuIsVisible ? "closeMenu" : "openMenu"
        }`}
        onClick={handleMenuClick}
      ></div>

      {window.innerWidth >= 768 && (
        <Taglist
          handleTagsOpeningButton={handleTagsOpeningButton}
          inputIsVisible={inputIsVisible}
        />
      )}

      {window.innerWidth >= 768 && (
        <Searchbar
          handleSearchSubmit={handleSearchSubmit}
          handleSearchButton={handleSearchButton}
          inputIsVisible={inputIsVisible}
          setInputValue={setInputValue}
        />
      )}
      <div className="login-button_wrapper wrapper">
        <LoginButton handleLoginButton={handleLoginButton} />
      </div>

      {menuIsVisible && (
        <MobileMenuSection
          handleTagsOpeningButton={handleTagsOpeningButton}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchButton={handleSearchButton}
          inputIsVisible={inputIsVisible}
          setInputValue={setInputValue}
          handleLoginButton={handleLoginButton}
        />
      )}
    </header>
  );
};

export default Header;
