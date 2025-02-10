import React from "react";
import "./recipeCard.css";

const RecipeCard = () => {
  return (
    <div className="recipeCard">
      <div className="recipeTitle">
        <h1>Recipe Title</h1>
      </div>
      <div className="recipeImg">
        <div className="imageContainer">
          <img src="../../../images/PBHoneyOatmeal.jpg" alt="Peanut Butter Oatmeal" />
        </div>
      </div>
      <div className="recipeQuickInfo">
        <p>Calories</p>
        <p>Macro Details</p>
      </div>
    </div>
  );
};

export default RecipeCard;
