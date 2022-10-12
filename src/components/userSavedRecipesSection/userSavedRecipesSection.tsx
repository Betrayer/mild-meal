import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import "./userSavedRecipesSection.scss";

const UserSavedRecipesSection: FC = () => {
  const handleClick = () => {
    alert("cock clock");
  };

  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <section
      className={`user-saved-recipes-section ${currentThemeColor}`}
    >
      <p className="user-saved-recipes-section__text">
        Your cookbook is empty and sad! press “add recipe” to add your own dish
        and make your page happier!
      </p>
      <div className="user-saved-recipes-section__button-wrapper">
        <div
          className={`user-saved-recipes-section__button ${
            currentThemeColor ? "dark" : ""
          }`}
          onClick={handleClick}
        ></div>
        <span className="user-saved-recipes-section__button-text">
          add recipe
        </span>
      </div>
    </section>
  );
};

export default UserSavedRecipesSection;
