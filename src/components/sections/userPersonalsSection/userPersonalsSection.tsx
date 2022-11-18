import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
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
    <section className={`user-personals-section ${currentThemeColor}`}>
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
          <input
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
            defaultValue="name"
          />
        </li>
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change age
          </span>
          <input
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
            defaultValue="age"
          />
        </li>
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change location
          </span>
          <input
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
            defaultValue="location"
          />
        </li>
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change email
          </span>
          <input
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
            defaultValue="email"
          />
        </li>
        <li className="user-personals-section__list-item">
          <span
            className={`user-personals-section__list-item__button ${
              currentThemeColor ? "dark" : ""
            }`}
            onClick={handleClick}
          >
            change password
          </span>
          <input
            className={`user-personals-section__list-item__prop ${
              currentThemeColor ? "dark" : ""
            }`}
            defaultValue="password"
          />
        </li>
      </ul>
      <SocialsSection />
    </section>
  );
};

export default UserPersonalsSection;
