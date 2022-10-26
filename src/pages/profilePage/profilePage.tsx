import React, { FC } from "react";
import UserCutawaySection from "../../components/sections/userCutawaySection/userCutawaySection";
import UserPersonalsSection from "../../components/sections/userPersonalsSection/userPersonalsSection";
import UserAddedRecipesSection from "../../components/sections/userSavedRecipesSection/userSavedRecipesSection";
import UserFavoriteSection from "../../components/sections/userFavoriteSection/userFavoriteSection";
import UserTodoSection from "../../components/sections/userTodoSection/userTodoSection";

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
