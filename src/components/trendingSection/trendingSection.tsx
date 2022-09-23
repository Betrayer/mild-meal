import React, { FC } from "react";
import "./trendingSection.scss";

const TrendingSection: FC = () => {
  return (
    <section className="trending-section">
        <span className="trending-section__title">trending recipes</span>
      <div className="trending-section__content-block">
      </div>
    </section>
  );
};

export default TrendingSection;
