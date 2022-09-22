import React, { FC } from "react";
import GreetingSection from "../../components/greetingSection/greeetingSection";
import TrendingSection from "../../components/trendingSection/trendingSection";

import "./index.scss";

const HomePage: FC = () => {
  return (
    <div className="homePage">
      <GreetingSection />
      <TrendingSection />
    </div>
  );
};

export default HomePage;
