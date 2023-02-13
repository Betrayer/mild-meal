import React, { FC, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
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

  const user = useSelector((state: RootState) => state.auth.user);
  // console.log(user);

  const getDummyData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => 1234 ", doc.data());
    });
  };

  const docRef = () => {
    if (user) {
      return doc(db, "users", user.uid);
    }
  };

  const docSnap = async () => {
    try {
      // @ts-ignore
      const res = await getDoc(docRef());
      // console.log(res.data());
    } catch (error) {
      // console.log(error);
    }
  };

  docSnap();

  const data = {
    saved: [],
    todo: [],
    favorites: [],
  };

  const setDummyData = async () => {
    await setDoc(doc(db, "users", `${user.uid}`), data);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);

  const dispatch = useDispatch();

  const handleLoginButton = () => {
    setShowLoginModal(!showLoginModal);
  };

  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  useEffect(() => {
    dispatch(getRecipes());
    getDummyData();
    // setDummyData();
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
