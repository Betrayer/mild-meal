import React, { FC } from "react";
import "./userSavedRecipesSection.scss";

const UserSavedRecipesSection: FC = () => {
  const handleClick = () => {
    alert("cock clock");
  };

  return (
    <div className="user-saved-recipes-section">
      <span className="user-saved-recipes-section__text">
        Your cookbook is empty and sad! press “add recipe” to add your own dish
        and make your page happier!
      </span>
      <div className="user-saved-recipes-section__button-wrapper">
        <div
          className="user-saved-recipes-section__button"
          onClick={handleClick}
        ></div>
        <span className="user-saved-recipes-section__button-text">
          add recipe
        </span>
      </div>
    </div>
  );
};

export default UserSavedRecipesSection;
