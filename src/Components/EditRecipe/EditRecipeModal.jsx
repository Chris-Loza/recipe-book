import React from "react";
import "./editRecipeModal.css";

const EditRecipeModal = ({
  showEditModal,
  setShowEditModal,
  name,
  ingredients,
  nutrition,
  description,
  image,
  timeOfDay,
}) => {
  console.log(timeOfDay);
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
                />
                <span>Breakfast</span>
              </label>

              <label htmlFor="Lunch">
                <input type="radio" name="time" id="Lunch" value={"Lunch"} />
                <span>Lunch</span>
              </label>

              <label htmlFor="Dinner">
                <input type="radio" name="time" id="Dinner" value={"Dinner"} />
                <span>Dinner</span>
              </label>

              <label htmlFor="Snacks">
                <input type="radio" name="time" id="Snacks" value={"Snacks"} />
                <span>Snacks</span>
              </label>
            </fieldset>
          </div>
          <div className="editRecipe">
            <fieldset className="editRecipeFieldset">
              <legend>Edit Ingredients</legend>
              <div className="ingredients">
                <div className="ingredient">
                  <img
                    src="../../../images/RemoveIconRed.svg"
                    alt="Remove Icon"
                  />
                  <p>Ingredient Name:</p>
                </div>
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
                <p>Totals Macros</p>
              </div>
              <div className="recipeDescription">
                <textarea placeholder="Description" />
              </div>
            </fieldset>
          </div>
          <div className="editRecipeImgSubmit">
            <div className="editRecipeImageContainer">
              <label htmlFor="recipeImage">
                <img src="../../../images/AddPhotoAlt.svg" alt="Recipe Image" />
                Change Image
              </label>
              <input style={{ display: "none" }} type="file" id="recipeImage" />
            </div>
            <div className="editRecipeTitle">
              <input type="text" placeholder="Edit Recipe Title" />
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
