import React, { useContext, useEffect, useState } from "react";
import "./recipeCard.css";
import ExpandedCard from "./ExpandedCard";
import EditRecipeModal from "../EditRecipe/EditRecipeModal";
import { GlobalContext } from "../../Library/globalContext";

const RecipeCard = ({ timeOfDay, index }) => {
  const { breakfastRecipes, lunchRecipes, dinnerRecipes, snacksRecipes } =
    useContext(GlobalContext);
  const [currentRecipe, setCurrentRecipe] = useState([]);
  useEffect(() => {
    if (timeOfDay === "Breakfast") {
      setCurrentRecipe(breakfastRecipes[index]);
    } else if (timeOfDay === "Lunch") {
      setCurrentRecipe(lunchRecipes[index]);
    } else if (timeOfDay === "Dinner") {
      setCurrentRecipe(dinnerRecipes[index]);
    } else {
      setCurrentRecipe(snacksRecipes[index]);
    }
  }, [breakfastRecipes, lunchRecipes, dinnerRecipes, snacksRecipes, timeOfDay]);

  const [cardExpand, setCardExpand] = useState(false);
  const handleCardExpand = () => {
    setCardExpand(!cardExpand);
  };
  const [showEditModal, setShowEditModal] = useState(false);
  console.log(index);
  console.log(breakfastRecipes[index]);
  console.log(currentRecipe);
  return (
    <div className="recipeCard">
      <div className="recipeImg">
        <div
          className="editButton"
          onClick={() => setShowEditModal(!showEditModal)}
        >
          <img src="../../../images/EditPencilFillDark.svg" alt="Edit Icon" />
        </div>
        <div
          className="deleteButton"
        >
          <img src="../../../images/DeleteIconTrashRed.svg" alt="Delete Icon" />
        </div>
        <div className="imageContainer">
          <img
            src={currentRecipe.image || "../../../images/PBHoneyOatmeal.jpg"}
            alt="Recipe Image"
          />
        </div>
      </div>
      <div className="recipeInfo">
        <div className="recipeTitle">
          <p>{currentRecipe.name}</p>
        </div>
        <div className="recipeQuickInfo">
          <div className="recipeDescription">{currentRecipe.description}</div>
          <div className="recipeQuickNutrients">
            <p>Calories: {currentRecipe.nutrition?.calories}</p>
            <p className="macros" onClick={handleCardExpand}>
              {" "}
              + Macros & Details
            </p>
          </div>
        </div>
      </div>
      {cardExpand && (
        <div
          className="cardExpandContainer"
        >
          <ExpandedCard
            cardExpand={cardExpand}
            setCardExpand={setCardExpand}
            currentRecipe={currentRecipe}
          />
        </div>
      )}
      {showEditModal && (
        <div className="editRecipeModalContainerMain">
          <EditRecipeModal
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            timeOfDay={timeOfDay}
            index={index}
          />
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
