import React from "react";
import "./recipeCard.css";

const RecipeCard = ({ name, ingredients, nutrition, description, image }) => {
  console.log(nutrition?.calories);
  return (
    <div className="recipeCard">
      <div className="recipeImg">
        <div className="imageContainer">
          <img
            src={image || "../../../images/PBHoneyOatmeal.jpg"}
            alt="Peanut Butter Oatmeal"
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
            <p className="macros"> + Macro Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
