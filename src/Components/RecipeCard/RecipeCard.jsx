import React, { useContext, useEffect, useRef, useState } from "react";
import "./recipeCard.css";
import ExpandedCard from "./ExpandedCard";
import EditRecipeModal from "../EditRecipe/EditRecipeModal";
import { GlobalContext } from "../../Library/globalContext";

const RecipeCard = ({ timeOfDay, index }) => {
  const {
    breakfastRecipes,
    lunchRecipes,
    dinnerRecipes,
    snacksRecipes,
    deleteRecipe,
  } = useContext(GlobalContext);

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

  const [showDialog, setShowDialog] = useState(false);
  const dialogRef = useRef(null);
  const handleDialog = () => {
    setShowDialog(!showDialog);
  };

  const handleDeleteRecipe = () => {
    deleteRecipe(timeOfDay, index);
    setShowDialog(false);
  };

  return (
    <div className="recipeCard">
      <div className="recipeImg">
        <div
          className="editButton"
          onClick={() => setShowEditModal(!showEditModal)}
        >
          <img src="../../../images/EditPencilFillDark.svg" alt="Edit Icon" />
        </div>
        <div className="deleteButton">
          <img
            src="../../../images/DeleteIconTrashRed.svg"
            alt="Delete Icon"
            onClick={handleDialog}
          />
        </div>
        {showDialog && (
          <div className="dialogContainer">
            <dialog ref={dialogRef}>
              <div className="confirmationText">
                Are you sure you want to delete this recipe?
              </div>
              <div className="buttons">
                <div
                  className="dialogButton cancelButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDialog(false);
                  }}
                >
                  Cancel
                </div>
                <div
                  className="dialogButton confirmDeleteButton"
                  onClick={handleDeleteRecipe}
                >
                  Delete
                </div>
              </div>
            </dialog>
          </div>
        )}
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
        <div className="cardExpandContainer">
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
