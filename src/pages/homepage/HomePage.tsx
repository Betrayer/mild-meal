import React, { FC } from "react";
import GreetingSection from "../../components/greetingSection/greeetingSection";

import "./index.scss";

const HomePage: FC = () => {
  return (
    <div className="pageWrapper">
      <GreetingSection />
    </div>
  );
};

export default HomePage;
