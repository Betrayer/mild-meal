import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

import "./userTodoSection.scss";

const UserTodoSection: FC = () => {
  const handleClick = () => {
    alert("cock clock");
  };

  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <section className={`user-todo-section ${currentThemeColor}`}>
      <p className="user-todo-section__text">
        you haven’t cook anything yet! but if you will, be sure to update your
        progress! to add your cooked dishes press the button below. dont forget
        to add photo, if you like to picture your food.
      </p>
      <div className="user-todo-section__button-wrapper">
        <div
          className={`user-todo-section__button ${currentThemeColor}`}
          onClick={handleClick}
        ></div>
        <span className="user-todo-section__button-text">add recipe</span>
      </div>
    </section>
  );
};

export default UserTodoSection;
