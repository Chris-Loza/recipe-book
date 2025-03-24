import React, { useState } from "react";
import "./expandedCard.css";

const ExpandedCard = ({
  setCardExpand,
  currentRecipe,
}) => {
  console.log(currentRecipe);
  return (
    <div className="expandedCardContainer" onClick={() => setCardExpand(false)}>
      <div className="expandedCard" onClick={(e) => e.stopPropagation()}>
        <div className="nutritionLabel">
          <div className="header">
            <h1>Nutrition Facts</h1>
            <div className="divider"></div>
            <div className="servingSize">
              <p>
                <b>Serving size</b>
              </p>
              <p>
                <b>{currentRecipe.nutrition.quantity}g</b>
              </p>
            </div>
            <div className="largeDivider"></div>
            <div className="calorieInfo">
              <div className="servingContainer">
                <p>Amount per serving</p>
                <p className="caloriesText">Calories</p>
              </div>
              <div className="calories">
                <p>{currentRecipe.nutrition?.calories}</p>
              </div>
            </div>
          </div>
          <div className="mediumDivider"></div>
          <div className="dailyValueText">
            <div className="dailyValuePercent">
              <p>% Daily Value*</p>
            </div>
            <div className="divider"></div>
            <div className="macro">
              <div className="totalMacro">
                <p>
                  <span>Total Fat</span> {currentRecipe.nutrition?.fat}g
                </p>
              </div>
              <div className="macroPercentage">
                <p>{Math.floor((currentRecipe.nutrition?.fat / 78) * 100)}%</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="macro">
              <div className="totalMacro">
                <p>
                  <span>Total Carbohydrate</span> {currentRecipe.nutrition?.carbs}g
                </p>
              </div>
              <div className="macroPercentage">
                <p>{Math.floor((currentRecipe.nutrition?.carbs / 275) * 100)}%</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="macro">
              <div className="totalMacro">
                <p>
                  <span>Total Protein</span> {currentRecipe.nutrition?.protein}g
                </p>
              </div>
              <div className="macroPercentage">
                <p>{Math.floor((currentRecipe.nutrition?.protein / 50) * 100)}%</p>
              </div>
            </div>
            <div className="largeDivider"></div>
            <div className="disclaimer">
              <p>
                The % Daily Value (DV) tells you how much a nutrient in a
                serving of food contributes to a daily diet. 2,000 calories a
                day is used for general nutrition advice.
              </p>
            </div>
          </div>
        </div>
        <div className="ingredientsList">
          <div className="ingredientsHeader">
            <h1>{currentRecipe.name}</h1>
            <div className="divider"></div>
          </div>
          <div className="ingredients">
            <h1>Ingredients</h1>
            <ul>
              {currentRecipe.ingredients.ingredientArray.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.ingredient}: {ingredient.quantity}g
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCard;
