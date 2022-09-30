import React, { FC, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../configs/firebase.config";
import HomePage from "../../pages/homepage/HomePage";
import RecipePage from "../../pages/recipePage/recipePage";
import Header from "../header/header";
import LoginAndRegistrationSection from "../loginAndRegistrationSection/loginAndRegistrationSection";
import "./index.scss";

const App: FC = () => {
  // const getDummyData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "test"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginButton = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <div className="appWrapper">
      <Header handleLoginButton={handleLoginButton} />
      {showLoginModal && (
        <LoginAndRegistrationSection handleLoginButton={handleLoginButton} />
      )}
      {/* <HomePage /> */}
      {/* <RecipePage/> */}
    </div>
  );
};

export default App;
