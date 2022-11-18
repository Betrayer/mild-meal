import React, { FC, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebase.config";
import { getRecipes } from "../../redux/actions/recipes";
import Header from "../header/header";
import LoginAndRegistrationSection from "../sections/loginAndRegistrationSection/loginAndRegistrationSection";
import "./index.scss";
import NotFoundPage from "../../pages/404Page/404Page";

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

  const dispatch = useDispatch();

  const handleLoginButton = () => {
    setShowLoginModal(!showLoginModal);
  };

  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  useEffect(() => {
    // dispatch(getRecipes());
  }, []);

  return (
    <div className={`appWrapper ${currentThemeColor}`}>
      {window.innerWidth >= 1024 && (
        <>
          <div className="decoration-1" />
          <div className="decoration-2" />
          <div className="decoration-3" />
          {currentThemeColor === "bright" ? (
            <div className="decoration-4 bright" />
          ) : (
            <div className="decoration-4 dark" />
          )}
        </>
      )}

      <Header handleLoginButton={handleLoginButton} />
      {showLoginModal && (
        <LoginAndRegistrationSection handleLoginButton={handleLoginButton} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>...</>}>
              {isAuth ? <ProfilePage /> : <HomePage />}
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
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
