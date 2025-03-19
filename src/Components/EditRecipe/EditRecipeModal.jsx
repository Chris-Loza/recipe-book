import React, { useContext, useState } from "react";
import "./editRecipeModal.css";
import { GlobalContext } from "../../Library/globalContext";

const EditRecipeModal = ({
  showEditModal,
  setShowEditModal,
  timeOfDay,
  index,
  description,
  image,
  name,
}) => {
  const { breakfastRecipes, lunchRecipes, dinnerRecipes, snacksRecipes } =
    useContext(GlobalContext);
  const [editedTimeOfDay, setEditedTimeOfDay] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  console.log(timeOfDay);
  console.log(dinnerRecipes[index]);
  // Do this with the index of the recipe instead
  return (
    showEditModal && (
      <div
        className="editRecipeModalContainer"
        onClick={() => setShowEditModal(false)}
      >
        <div className="editRecipeModal" onClick={(e) => e.stopPropagation()}>
          <div className="editRecipeModalHeader">
            <p>Edit Recipe</p>
            <div className="bottomBorder"></div>
          </div>
          <div className="editRadioButtons">
            <fieldset className="radioFieldSet">
              <legend>Edit Time of Day</legend>
              <label htmlFor="Breakfast">
                <input
                  type="radio"
                  name="time"
                  id="Breakfast"
                  value={"Breakfast"}
                  checked={timeOfDay === "Breakfast"}
                  onChange={(e) => setEditedTimeOfDay(e.target.value)}
                />
                <span>Breakfast</span>
              </label>

              <label htmlFor="Lunch">
                <input
                  type="radio"
                  name="time"
                  id="Lunch"
                  value={"Lunch"}
                  checked={timeOfDay === "Lunch"}
                  onChange={(e) => setEditedTimeOfDay(e.target.value)}
                />
                <span>Lunch</span>
              </label>

              <label htmlFor="Dinner">
                <input
                  type="radio"
                  name="time"
                  id="Dinner"
                  value={"Dinner"}
                  checked={timeOfDay === "Dinner"}
                  onChange={(e) => setEditedTimeOfDay(e.target.value)}
                />
                <span>Dinner</span>
              </label>

              <label htmlFor="Snacks">
                <input
                  type="radio"
                  name="time"
                  id="Snacks"
                  value={"Snacks"}
                  checked={timeOfDay === "Snacks"}
                  onChange={(e) => setEditedTimeOfDay(e.target.value)}
                />
                <span>Snacks</span>
              </label>
            </fieldset>
          </div>
          <div className="editRecipe">
            <fieldset className="editRecipeFieldset">
              <legend>Edit Ingredients</legend>
              <div className="ingredients">
                {timeOfDay === "Breakfast"
                  ? breakfastRecipes[index].ingredients.ingredientArray.map(
                      (ingredient, index) => (
                        <div className="ingredient" key={index}>
                          <img
                            src="../../../images/RemoveIconRed.svg"
                            alt="Remove Icon"
                          />
                          <p>
                            {" "}
                            Ingredient Name: {ingredient.ingredient} ||
                            Quantity: {ingredient.quantity}g || Calories:{" "}
                            {ingredient.calories} cal || Fat: {ingredient.fat}g
                            || Carbs: {ingredient.carbs}g || Protein:{" "}
                            {ingredient.protein}g
                          </p>
                        </div>
                      )
                    )
                  : timeOfDay === "Lunch"
                  ? lunchRecipes[index].ingredients.ingredientArray.map(
                      (ingredient, index) => (
                        <div className="ingredient" key={index}>
                          <img
                            src="../../../images/RemoveIconRed.svg"
                            alt="Remove Icon"
                          />
                          <p>
                            {" "}
                            Ingredient Name: {ingredient.ingredient} ||
                            Quantity: {ingredient.quantity}g || Calories:{" "}
                            {ingredient.calories} cal || Fat: {ingredient.fat}g
                            || Carbs: {ingredient.carbs}g || Protein:{" "}
                            {ingredient.protein}g
                          </p>
                        </div>
                      )
                    )
                  : timeOfDay === "Dinner"
                  ? dinnerRecipes[index].ingredients.ingredientArray.map(
                      (ingredient, index) => (
                        <div className="ingredient" key={index}>
                          <img
                            src="../../../images/RemoveIconRed.svg"
                            alt="Remove Icon"
                          />
                          <p>
                            {" "}
                            Ingredient Name: {ingredient.ingredient} ||
                            Quantity: {ingredient.quantity}g || Calories:{" "}
                            {ingredient.calories} cal || Fat: {ingredient.fat}g
                            || Carbs: {ingredient.carbs}g || Protein:{" "}
                            {ingredient.protein}g
                          </p>
                        </div>
                      )
                    )
                  : timeOfDay === "Dinner"
                  ? dinnerRecipes[index].ingredients.ingredientArray.map(
                      (ingredient, index) => (
                        <div className="ingredient" key={index}>
                          <img
                            src="../../../images/RemoveIconRed.svg"
                            alt="Remove Icon"
                          />
                          <p>
                            {" "}
                            Ingredient Name: {ingredient.ingredient} ||
                            Quantity: {ingredient.quantity}g || Calories:{" "}
                            {ingredient.calories} cal || Fat: {ingredient.fat}g
                            || Carbs: {ingredient.carbs}g || Protein:{" "}
                            {ingredient.protein}g
                          </p>
                        </div>
                      )
                    )
                  : ""}
              </div>
              <div className="ingredientInputs">
                <form>
                  <input
                    type="text"
                    name="ingredient"
                    id="ingredientName"
                    placeholder="Ingredient"
                  />
                  <input
                    type="text"
                    name="quantity"
                    id="ingredientQuantity"
                    placeholder="Quantity"
                  />
                  <input
                    type="text"
                    name="calories"
                    id="ingredientCalories"
                    placeholder="Calories"
                  />
                  <input
                    type="text"
                    name="fat"
                    id="ingredientFat"
                    placeholder="Fat"
                  />
                  <input
                    type="text"
                    name="carbs"
                    id="ingredientCarbs"
                    placeholder="Carbs"
                  />
                  <input
                    type="text"
                    name="protein"
                    id="ingredientProtein"
                    placeholder="Protein"
                  />
                </form>
                <img src="../../../images/AddBoxFill.svg" alt="Add Icon" />
              </div>
            </fieldset>
          </div>
          <div className="editNutritionSummary">
            <fieldset className="editNutritionFieldset">
              <legend>Edit Nutritional Summary & Description</legend>
              <div className="totalMacros">
                {timeOfDay === "Breakfast" ? (
                  <p>
                    Total Calories: {breakfastRecipes[index].nutrition.calories}{" "}
                    cal || Total Fat: {breakfastRecipes[index].nutrition.fat}g
                    || Total Carbs: {breakfastRecipes[index].nutrition.carbs}g
                    || Total Protein:{" "}
                    {breakfastRecipes[index].nutrition.protein}g
                  </p>
                ) : timeOfDay === "Lunch" ? (
                  <p>
                    Total Calories: {lunchRecipes[index].nutrition.calories} cal
                    || Total Fat: {lunchRecipes[index].nutrition.fat}g || Total
                    Carbs: {lunchRecipes[index].nutrition.carbs}g || Total
                    Protein: {lunchRecipes[index].nutrition.protein}g
                  </p>
                ) : timeOfDay === "Dinner" ? (
                  <p>
                    Total Calories: {dinnerRecipes[index].nutrition.calories}{" "}
                    cal || Total Fat: {dinnerRecipes[index].nutrition.fat}g ||
                    Total Carbs: {dinnerRecipes[index].nutrition.carbs}g ||
                    Total Protein: {dinnerRecipes[index].nutrition.protein}g
                  </p>
                ) : timeOfDay === "Snacks" ? (
                  <p>
                    Total Calories: {snacksRecipes[index].nutrition.calories}{" "}
                    cal || Total Fat: {snacksRecipes[index].nutrition.fat}g ||
                    Total Carbs: {snacksRecipes[index].nutrition.carbs}g ||
                    Total Protein: {snacksRecipes[index].nutrition.protein}g
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="recipeDescription">
                <textarea
                  placeholder={
                    description !== "" ? description : "Edit Description"
                  }
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
              </div>
            </fieldset>
          </div>
          <div className="editRecipeImgSubmit">
            <div className="editRecipeImageContainer">
              <label htmlFor="recipeImage">
                <img
                  src={image !== "" ? image : "../../../images/AddPhotoAlt.svg"}
                  alt="Recipe Image"
                />
                Change Image
              </label>
              <input style={{ display: "none" }} type="file" id="recipeImage" />
            </div>
            <div className="editRecipeTitle">
              <input
                type="text"
                placeholder={name !== "" ? name : "Edit Recipe Title"}
              />
            </div>
            <div className="editButton">
              <p>Edit Recipe</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditRecipeModal;
