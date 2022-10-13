import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

import "./userCutawaySection.scss";

const UserCutawaySection: FC = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <section className={`user-cutaway-section ${currentThemeColor}`}>
      <div className="user-cutaway-section__picture-and-name">
        <div className="user-cutaway-section__picture-and-name__picture"></div>
        <div className="user-cutaway-section__picture-and-name__name">name</div>
        <div
          className={`user-cutaway-section__picture-and-name__age-location ${
            currentThemeColor ? "dark" : ""
          }`}
        >
          age, location
        </div>
      </div>
      <ul className="user-cutaway-section__stats">
        <li className="user-cutaway-section__stats__saved cutaway-stats">
          <span className="user-cutaway-section__stats__saved__data cutaway-stats__data">
            my recipes
          </span>
          <span
            className={`user-cutaway-section__stats__saved__data cutaway-stats__num ${
              currentThemeColor ? "dark" : ""
            }`}
          >
            3
          </span>
        </li>
        <li className="user-cutaway-section__stats__favs cutaway-stats">
          <span className="user-cutaway-section__stats__saved__favs cutaway-stats__data">
            favorites
          </span>
          <span
            className={`user-cutaway-section__stats__saved__favs cutaway-stats__num ${
              currentThemeColor ? "dark" : ""
            }`}
          >
            11
          </span>
        </li>

        <li className="user-cutaway-section__stats__todo cutaway-stats">
          <span className="user-cutaway-section__stats__saved__todo cutaway-stats__data">
            to-do list
          </span>
          <span
            className={`user-cutaway-section__stats__saved__todo cutaway-stats__num ${
              currentThemeColor ? "dark" : ""
            }`}
          >
            48
          </span>
        </li>
      </ul>
    </section>
  );
};

export default UserCutawaySection;
