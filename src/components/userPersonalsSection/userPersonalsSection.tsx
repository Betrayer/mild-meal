import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import SocialsSection from "../socialsSection/socialsSection";

import "./userPersonalsSection.scss";

const UserPersonalsSection: FC = () => {
  const handleClick = () => {
    alert("function!");
  };

  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <section
      className={`user-personals-section ${currentThemeColor}`}
    >
      <ul className="user-personals-section__list">
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change name
          </span>
          <span
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
          >
            my name
          </span>
        </li>
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change name
          </span>
          <span
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
          >
            my name
          </span>
        </li>
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change name
          </span>
          <span
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
          >
            my name
          </span>
        </li>
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change name
          </span>
          <span
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
          >
            my name
          </span>
        </li>
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change name
          </span>
          <span
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
          >
            my name
          </span>
        </li>
      </ul>
      <SocialsSection />
    </section>
  );
};

export default UserPersonalsSection;
