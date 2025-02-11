import React from "react";
import "./recipeCard.css";

const RecipeCard = () => {
  return (
    <div className="recipeCard">
      <div className="recipeImg">
        <div className="imageContainer">
          <img
            src="../../../images/PBHoneyOatmeal.jpg"
            alt="Peanut Butter Oatmeal"
          />
        </div>
      </div>
      <div className="recipeInfo">
        <div className="recipeTitle">
          <h1>Recipe Title</h1>
        </div>
        <div className="recipeQuickInfo">
          <div className="recipeDescription">Description</div>
          <div className="recipeQuickNutrients">
            <p>Calories</p>
            <p>Macro Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
