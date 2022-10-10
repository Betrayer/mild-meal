import React, { FC, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebase.config";
import Header from "../header/header";
import LoginAndRegistrationSection from "../loginAndRegistrationSection/loginAndRegistrationSection";

import "./index.scss";

const App: FC = () => {
  const HomePage = React.lazy(() => import("../../pages/homepage/HomePage"));
  const RecipePage = React.lazy(
    () => import("../../pages/recipePage/recipePage")
  );
  const SearchResultsPage = React.lazy(
    () => import("../../pages/searchResultsPage/searchResultsPage")
  );
  const ProfilePage = React.lazy(
    () => import("../../pages/profilePage/profilePage")
  );

  // const getDummyData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "test"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };
  const [showLoginModal, setShowLoginModal] = useState(false);

  // const [userToken, setUserToken] = useState("");

  const handleLoginButton = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <div className="appWrapper">
      <Header handleLoginButton={handleLoginButton} />
      {showLoginModal && (
        <LoginAndRegistrationSection handleLoginButton={handleLoginButton} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>...</>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/recipe/*"
          element={
            <Suspense fallback={<>...</>}>
              <RecipePage />
            </Suspense>
          }
        />
        <Route
          path="/results"
          element={
            <Suspense fallback={<>...</>}>
              <SearchResultsPage />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<>...</>}>
              <ProfilePage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
