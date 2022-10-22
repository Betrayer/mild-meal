import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

import "./userFavoriteSection.scss";

const UserFavoriteSection: FC = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <section className={`user-favorite-section ${currentThemeColor}`}>
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
