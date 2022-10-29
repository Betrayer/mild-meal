import React, { FC } from "react";
import { useSelector } from "react-redux";
import NavigateButtons from "../../components/buttons/navigateButtons/navigateButtons";
import { RootState } from "../../redux/rootReducer";
import "./404Page.scss";
import pageNotFound from "../../assets/images/404.png";

const NotFoundPage: FC = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );
  return (
    <div className={`not-found-page not-found-page-${currentThemeColor}`}>
      <img src={pageNotFound} alt="404" />
      <button className="easter-egg">
        <div className="easter-egg-yolk"></div>
      </button>
      <span>Sorry, that page doesn't exist!</span>
      <NavigateButtons />
    </div>
  );
};

export default NotFoundPage;
