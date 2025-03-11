import React, { useState } from "react";
import "./recipeCard.css";
import ExpandedCard from "./ExpandedCard";

const RecipeCard = ({ name, ingredients, nutrition, description, image }) => {
  const [cardExpand, setCardExpand] = useState(false);
  const handleCardExpand = () => {
    setCardExpand(!cardExpand);
  };

  return (
    <div className="recipeCard">
      <div className="recipeImg">
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
    </div>
  );
};

export default RecipeCard;
