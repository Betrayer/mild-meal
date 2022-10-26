import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecipesByKeywords } from "../../redux/actions/recipes";
import { RootState } from "../../redux/rootReducer";
import LoginButton from "../buttons/loginButton/loginButton";
import MobileMenuSection from "../sections/mobileMenuSection/mobileMenuSection";
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
  const dispatch = useDispatch();

  const handleMenuClick = (): void => {
    setMenuIsVisible(!menuIsVisible);
  };

  
  const handleSearchSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // dispatch(getRecipesByKeywords(inputValue)) 
    setInputValue('');
    navigate("/results");
    // console.log("блядь")
  };
  
  const handleSearchButton = (e: React.FormEvent): void => {
    e.preventDefault();
    inputIsVisible ? handleSearchSubmit(e) : setInputIsVisible(true);
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
      />

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
