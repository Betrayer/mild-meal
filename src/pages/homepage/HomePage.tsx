import React, { FC } from "react";
import { useSelector } from "react-redux";
import GreetingSection from "../../components/greetingSection/greeetingSection";
import TrendingSection from "../../components/trendingSection/trendingSection";
import { RootState } from "../../redux/rootReducer";

import "./homePage.scss";

const HomePage: FC = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );
  return (
    <div className={`homePage ${currentThemeColor}`}>
      <GreetingSection />
      <TrendingSection />
    </div>
  );
};

export default HomePage;
