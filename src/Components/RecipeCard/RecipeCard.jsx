import React, { useState } from "react";
import "./recipeCard.css";
import ExpandedCard from "./ExpandedCard";
import EditRecipeModal from "../EditRecipe/EditRecipeModal";

const RecipeCard = ({
  name,
  ingredients,
  nutrition,
  description,
  image,
  timeOfDay,
}) => {
  const [cardExpand, setCardExpand] = useState(false);
  const handleCardExpand = () => {
    setCardExpand(!cardExpand);
  };
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="recipeCard">
      <div className="recipeImg">
        <div
          className="editButton"
          onClick={() => setShowEditModal(!showEditModal)}
        >
          <img src="../../../images/EditPencilFillDark.svg" alt="Edit Icon" />
        </div>
        <div className="imageContainer">
          <img
            src={image || "../../../images/PBHoneyOatmeal.jpg"}
            alt="Recipe Image"
          />
        </div>
      </div>
      <div className="recipeInfo">
        <div className="recipeTitle">
          <p>{name}</p>
        </div>
        <div className="recipeQuickInfo">
          <div className="recipeDescription">{description}</div>
          <div className="recipeQuickNutrients">
            <p>Calories: {nutrition?.calories}</p>
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
          // onClick={() => setCardExpand(false)}
        >
          <ExpandedCard
            cardExpand={cardExpand}
            setCardExpand={setCardExpand}
            ingredients={ingredients}
            name={name}
            nutrition={nutrition}
          />
        </div>
      )}
      {showEditModal && (
        <div className="editRecipeModalContainerMain">
          <EditRecipeModal
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            name={name}
            ingredients={ingredients}
            nutrition={nutrition}
            description={description}
            image={image}
            timeOfDay={timeOfDay}
          />
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
