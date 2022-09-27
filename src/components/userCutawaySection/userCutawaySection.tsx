import React, { FC } from "react";

import "./userCutawaySection.scss";

const UserCutawaySection: FC = () => {
  return (
    <div className="user-cutaway-section">
      <div className="user-cutaway-section__picture-and-name">
        <div className="user-cutaway-section__picture-and-name__picture"></div>
        <div className="user-cutaway-section__picture-and-name__name">name</div>
        <div className="user-cutaway-section__picture-and-name__age-location">age, location</div>
      </div>
      <div className="user-cutaway-section__stats">
        <div className="user-cutaway-section__stats__added cutaway-stats" >
          <span className="user-cutaway-section__stats__added__data cutaway-stats__data">added recipes</span>
          <span className="user-cutaway-section__stats__added__data cutaway-stats__num">3</span>
        </div>
        <div className="user-cutaway-section__stats__favs cutaway-stats">
          <span className="user-cutaway-section__stats__added__favs cutaway-stats__data">favorite recipes</span>
          <span className="user-cutaway-section__stats__added__favs cutaway-stats__num">11</span>
        </div>

        <div className="user-cutaway-section__stats__todo cutaway-stats">
          <span className="user-cutaway-section__stats__added__todo cutaway-stats__data">to-do list</span>
          <span className="user-cutaway-section__stats__added__todo cutaway-stats__num">48</span>
        </div>
      </div>
    </div>
  );
};

export default UserCutawaySection;
