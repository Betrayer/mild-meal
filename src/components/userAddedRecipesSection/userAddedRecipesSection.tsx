import React, { FC } from "react";
import "./userAddedRecipesSection.scss";

const UserAddedRecipesSection: FC = () => {
  const handleClick = () => {
    alert("cock clock");
  };

  return (
    <div className="user-added-recipes-section">
      <span className="user-added-recipes-section__text">
        Your cookbook is empty and sad! press “add recipe” to add your own dish
        and make your page happier!{" "}
      </span>
      <div className="user-added-recipes-section__button-wrapper">
        <div
          className="user-added-recipes-section__button"
          onClick={handleClick}
        ></div>
        <span className="user-added-recipes-section__button-text">
          add recipe
        </span>
      </div>
    </div>
  );
};

export default UserAddedRecipesSection;
