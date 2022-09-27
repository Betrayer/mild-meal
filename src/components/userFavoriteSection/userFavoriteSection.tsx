import React, { FC } from "react";

import "./userFavoriteSection.scss";

const UserFavoriteSection: FC = () => {
  return (
    <section className="user-favorite-section">
      <p className="user-favorite-section__text">
        here will be your bookmarks. if some of our recipes are seems good to
        you, you can simply sAVE IT at the recipe’s page to add it here! it will
        be a short way to your favs.
      </p>
      <div className="user-favorite-section__img"></div>
    </section>
  );
};

export default UserFavoriteSection;
