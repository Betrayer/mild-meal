import React, { FC } from "react";

import "./userCutawaySection.scss";

const UserCutawaySection: FC = () => {
  return (
    <div className="user-cutaway-section">
      <div className="user-cutaway-section__picture-and-name">
        <div className="user-cutaway-section__picture-and-name__picture"></div>
        <div className="user-cutaway-section__picture-and-name__name">name</div>
        <div className="user-cutaway-section__picture-and-name__age-location">
          age, location
        </div>
      </div>
      <ul className="user-cutaway-section__stats">
        <li className="user-cutaway-section__stats__saved cutaway-stats">
          <span className="user-cutaway-section__stats__saved__data cutaway-stats__data">
            saved recipes
          </span>
          <span className="user-cutaway-section__stats__saved__data cutaway-stats__num">
            3
          </span>
        </li>
        <li className="user-cutaway-section__stats__favs cutaway-stats">
          <span className="user-cutaway-section__stats__saved__favs cutaway-stats__data">
            favorite recipes
          </span>
          <span className="user-cutaway-section__stats__saved__favs cutaway-stats__num">
            11
          </span>
        </li>

        <li className="user-cutaway-section__stats__todo cutaway-stats">
          <span className="user-cutaway-section__stats__saved__todo cutaway-stats__data">
            to-do list
          </span>
          <span className="user-cutaway-section__stats__saved__todo cutaway-stats__num">
            48
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UserCutawaySection;
