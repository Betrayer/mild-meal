import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { nanoid } from "nanoid";
import gluten from "../../../assets/images/gluten.png";
import gluten_free from "../../../assets/images/gluten-free.png";
import vegan from "../../../assets/images/vegan.png";
import non_vegan from "../../../assets/images/non-vegan.png";
import time from "../../../assets/images/cooking-time.png";
import "./recipeDescriptionSection.scss";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../configs/firebase.config";
import { useDispatch } from "react-redux";
import { loginResponce } from "../../../redux/actions/auth";
import {
  getChosenRecipe,
  getUserCollectionResponse,
} from "../../../redux/actions/recipes";

const RecipeDescriptionSection: FC = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  const recipe = useSelector((state: RootState) => state.recipes.chosenRecipe);

  const user = useSelector((state: RootState) => state.auth.user);
  // console.log(user);

  const backendUserData = doc(db, "users", `${user.uid}`);
  const addRecipeToFavorites = async (data: {}) => {
    await updateDoc(backendUserData, {
      favorites: arrayUnion(data),
    });
  };
  const removeRecipeFromFavorites = async (data: {}) => {
    await updateDoc(backendUserData, {
      favorites: arrayRemove(data),
    });
  };

  const dispatch = useDispatch();
  const userCollection = useSelector(
    (state: RootState) => state.recipes.userCollection
  );

  // const favsButtonAction = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     if (doc.id === user.uid) {
  //       if (doc.data().favorites.length === 0) {
  //       console.log("length = 0")
  //         addRecipeToFavorites(recipe);
  //       } else {
  //         doc.data().favorites.find((el: any) => {
  //           if (el.id === recipe.id) {
  //             removeRecipeFromFavorites(recipe);
  //             dispatch(getUserCollectionResponse(doc.data()));
  //           } else {
  //             addRecipeToFavorites(recipe);
  //             dispatch(getUserCollectionResponse(doc.data()));
  //           }
  //         });
  //       }
  //     }
  //   });
  // };

  // useEffect(() => {
  //   return () => {
  //     dispatch(getChosenRecipe(null));
  //   };
  // }, []);

  // console.log(recipe.id)

  const favsButtonAction = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.id === user.uid) {
        if (doc.data().favorites.length === 0) {
          // const filteredArray = [...doc.data().favorites, recipe]
          addRecipeToFavorites(recipe);
          dispatch(getUserCollectionResponse(doc.data()));
          // console.log(filteredArray)
          // addRecipeToFavorites(recipe);
        } else if (
          doc.data().favorites.find((el: any) => el.id === recipe.id)
        ) {
          // const filteredArray = doc.data().favorites.filter(function(el: any) {return el.id !== recipe.id})
          // console.log(filteredArray)
          removeRecipeFromFavorites(recipe);
          dispatch(getUserCollectionResponse(doc.data()));
          // removeRecipeFromFavorites(recipe);
          // dispatch(getUserCollectionResponse(filteredArray));
        } else {
          // const filteredArray = [...doc.data().favorites, recipe]
          addRecipeToFavorites(recipe);
          dispatch(getUserCollectionResponse(doc.data()));
          // console.log(filteredArray)
          // dispatch(getUserCollectionResponse(filteredArray));
        }
      }
    });
  };

  // const object1 = {
  //   id: "a",
  // };

  // const object2 = {
  //   id: "d",
  // };

  // let originalArray = [
  //   {
  //     id: "a",
  //   },
  //   {
  //     id: "b",
  //   },
  //   {
  //     id: "c",
  //   },
  // ];
  // const favsButtonAction = (object: any) => {
  //   if (originalArray.find((el) => el.id === object.id)) {
  //     const filteredArray = originalArray.filter(function(el) {return el.id !== object.id})
  //     originalArray = filteredArray;
  //     console.log(originalArray)
  //   }
  //   else {
  //     originalArray.push(object);
  //     console.log(originalArray)
  //   }
  // };

  const toggleFavButton = () => {
    // userCollection.favorites.find((el: any) => console.log(el.title))
    return userCollection.favorites.find((el: any) => el.id === recipe.id);
    // console.log(userCollection.favorites)
  };

  // console.log(toggleFavButton())

  const getDummyData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.id === user.uid && console.log(doc.data());
    });
  };

  getDummyData();

  // useEffect(() => {
  //   const favsButtonAction2 = async () => {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     querySnapshot.forEach((doc) => {
  //       if (doc.id === user.uid) {
  //         doc.data().favorites.find((el: any) => {
  //           if (el.id === recipe.id) {
  //             // removeRecipeFromFavorites(recipe);
  //             setFavButtonType("add to");
  //             // return(el.id === recipe.id)
  //           } else {
  //             // addRecipeToFavorites(recipe);
  //             setFavButtonType("remove from");
  //             // return(el.id === recipe.id)
  //           }
  //         });
  //       }
  //     });
  //   };
  //   favsButtonAction2();
  // })

  return (
    <section className={`recipe-description-section ${currentThemeColor}`}>
      <div className="recipe-description-section__content">
        <div className="recipe-description-section__content__cutaway">
          <div className="description-wrapper">
            <span className="description">{recipe.title}</span>
            <span
              className="description-button"
              onClick={favsButtonAction}
              // onClick={() => console.log(123)}
            >
              {/* {`${favButtonType}`} FAVS */}
              {toggleFavButton() ? "remove from " : "add to "} favs
            </span>
          </div>
          <div className="wrapper">
            <img
              className="recipe-card__picture"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="details-wrapper">
              <img className="recipe-card__gluten" src={time} alt="time" />
              <span className="recipe-card__time">
                {recipe.readyInMinutes}
                <br />
                min
              </span>
              <img
                className="recipe-card__gluten"
                src={recipe.glutenFree ? gluten : gluten_free}
                alt="gluten"
              />
              <img
                className="recipe-card__vegan"
                src={recipe.vegan ? vegan : non_vegan}
                alt="vegan"
              />
            </div>
          </div>
        </div>
        <div className="recipe-description-section__content__info">
          <ul className="ingredients-list">
            <span className="ingredients-list-title">Ingredients:</span>
            {recipe?.extendedIngredients.map((ingredient: any) => (
              <li className="ingredients-list-item" key={nanoid(10)}>
                <div className="ingredients-list__content-wrapper">
                  <span>
                    {ingredient.amount.toString().length > 5
                      ? Math.round(ingredient.amount * 100) / 100
                      : ingredient.amount}{" "}
                    {ingredient.measures.metric.unitShort}
                  </span>
                  <div />
                  <span>{ingredient.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="list-wrapper">
            <span>Description:</span>
            <ol className="recipe-description-section__content__info__details">
              {recipe.analyzedInstructions.map((step: any) =>
                step.steps.map((step: any) => (
                  <li key={nanoid(10)}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDescriptionSection;
