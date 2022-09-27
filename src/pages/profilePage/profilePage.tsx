import React, { FC } from "react";
import UserCutawaySection from "../../components/userCutawaySection/userCutawaySection";
import UserPersonalsSection from "../../components/userPersonalsSection/userPersonalsSection";
import UserAddedRecipesSection from "../../components/userAddedRecipesSection/userAddedRecipesSection";
import UserFavoriteSection from "../../components/userFavoriteSection/userFavoriteSection";
import UserTodoSection from "../../components/userTodoSection/UserTodoSection";

import "./profilePage.scss";

const ProfilePage: FC = () => {
  return (
    <div className="profile-page">
      <div className="profile-page__content-wrapper">
        <UserCutawaySection />
        <UserPersonalsSection />
      </div>
      <div className="profile-page__content-wrapper content-wrapper-row">
        <UserAddedRecipesSection />
        <UserFavoriteSection />
        <UserTodoSection />
      </div>
    </div>
  );
};

export default ProfilePage;
