import React, { FC } from "react";

import "./userFavoriteSection.scss";

const UserFavoriteSection: FC = () => {
  return (
    <div className="user-favorite-section">
      <span className="user-favorite-section__text">
        here will be your bookmarks. if some of our recipes are seems good to
        you, you can simply sAVE IT at the recipe’s page to add it here! it will
        be a short way to your favs.
      </span>
      <div className="user-favorite-section__img"></div>
    </div>
  );
};

export default UserFavoriteSection;
