import React, { FC } from "react";
import HomePage from "../../pages/homepage/HomePage";
import Header from "../header/header";
import "./index.scss";

const App: FC = () => {
  return (
    <>
      <Header/>
      <HomePage />
    </>
  );
};

export default App;
