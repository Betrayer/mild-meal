import React, { FC } from "react";
import SocialsSection from "../socialsSection/socialsSection";

import "./userPersonalsSection.scss";

const UserPersonalsSection: FC = () => {

  const handleClick = () => {
    alert ('function!')
  }

  return (
    <div className="user-personals-section">
      <ul className="user-personals-section__list">
        <li className="user-personals-section__list-item">
          <span className="user-personals-section__list-item__button" onClick={handleClick}>change name</span>
          <span className="user-personals-section__list-item__prop">my name</span>
        </li>
        <li className="user-personals-section__list-item">
          <span className="user-personals-section__list-item__button" onClick={handleClick}>change name</span>
          <span className="user-personals-section__list-item__prop">my name</span>
        </li>
        <li className="user-personals-section__list-item">
          <span className="user-personals-section__list-item__button" onClick={handleClick}>change name</span>
          <span className="user-personals-section__list-item__prop">my name</span>
        </li>
        <li className="user-personals-section__list-item">
          <span className="user-personals-section__list-item__button" onClick={handleClick}>change name</span>
          <span className="user-personals-section__list-item__prop">my name</span>
        </li>
        <li className="user-personals-section__list-item">
          <span className="user-personals-section__list-item__button" onClick={handleClick}>change name</span>
          <span className="user-personals-section__list-item__prop">my name</span>
        </li>
      </ul>
      <SocialsSection/>
    </div>
  );
};

export default UserPersonalsSection;
