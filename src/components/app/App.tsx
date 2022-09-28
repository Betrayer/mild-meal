import React, { FC, useState } from "react";
import "./index.scss";
import Header from "../header/header";
import HomePage from "../../pages/homepage/HomePage";
import RecipePage from "../../pages/recipePage/recipePage";
import ProfilePage from "../../pages/profilePage/profilePage";
import { collection, getDocs } from "firebase/firestore";
import db from "../../configs/firebase.config";

const App: FC = () => {
  // const getDummyData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "test"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };

  return (
    <div className="appWrapper">
      <Header />
      <HomePage />
      {/* <RecipePage/> */}
      {/* <ProfilePage /> */}
    </div>
  );
};

export default App;
