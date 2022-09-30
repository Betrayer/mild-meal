import React, { FC } from "react";

import "./userTodoSection.scss";

const UserTodoSection: FC = () => {
  const handleClick = () => {
    alert("cock clock");
  };

  return (
    <section className="user-todo-section">
      <p className="user-todo-section__text">
        you haven’t cook anything yet! but if you will, be sure to update your
        progress! to add your cooked dishes press the button below. dont forget
        to add photo, if you like to picture your food.
      </p>
      <div className="user-todo-section__button-wrapper">
        <div className="user-todo-section__button" onClick={handleClick}></div>
        <span className="user-todo-section__button-text">add recipe</span>
      </div>
    </section>
  );
};

export default UserTodoSection;
