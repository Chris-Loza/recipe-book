import React, { useContext, useEffect, useRef, useState } from "react";
import "./editRecipeModal.css";
import { GlobalContext } from "../../Library/globalContext";

const EditRecipeModal = ({
  showEditModal,
  setShowEditModal,
  timeOfDay,
  index,
}) => {
  const { breakfastRecipes, lunchRecipes, dinnerRecipes, snacksRecipes } =
    useContext(GlobalContext);
  const currentRecipe =
    timeOfDay === "Breakfast"
      ? breakfastRecipes[index]
      : timeOfDay === "Lunch"
      ? lunchRecipes[index]
      : timeOfDay === "Dinner"
      ? dinnerRecipes[index]
      : timeOfDay === "snacks"
      ? snacksRecipes[index]
      : "";
  const ingredientsList = currentRecipe.ingredients.ingredientArray;
  const [currentIngredientsList, setCurrentIngredientsList] = useState(
    ingredientsList || []
  );

  const [displayImage, setDisplayImage] = useState(currentRecipe.image);

  const [editedTimeOfDay, setEditedTimeOfDay] = useState(
    currentRecipe.timeOfDay || "Breakfast"
  );
  const [editedTitle, setEditedTitle] = useState(currentRecipe.name || "");
  const [editedDescription, setEditedDescription] = useState(
    currentRecipe.description || ""
  );
  const [editedRecipeImage, setEditedRecipeImage] = useState({
    file: null,
    url: currentRecipe.image || "",
  });

  const formRef = useRef(null);
  const [addedIngredientsTotalNutrition, setAddedIngredientsTotalNutrition] =
    useState({
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      quantity: 0,
    });

  useEffect(() => {
    let totalAddedCalories = 0;
    let totalAddedFat = 0;
    let totalAddedCarbs = 0;
    let totalAddedProtein = 0;
    let totalAddedQuantity = 0;

    currentIngredientsList.forEach((ingredient) => {
      totalAddedCalories += ingredient.calories;
      totalAddedFat += ingredient.fat;
      totalAddedCarbs += ingredient.carbs;
      totalAddedProtein += ingredient.protein;
      totalAddedQuantity += ingredient.quantity;
    });

    setAddedIngredientsTotalNutrition({
      calories: totalAddedCalories,
      fat: totalAddedFat,
      carbs: totalAddedCarbs,
      protein: totalAddedProtein,
      quantity: totalAddedQuantity,
    });
  }, [currentIngredientsList]);

  const handleIngredientAddition = (e) => {
    e.preventDefault();

    if (formRef.current) {
      const ingredientData = new FormData(formRef.current);
      const rawIngredientValues = Object.fromEntries(ingredientData.entries());

      if (rawIngredientValues !== "") {
        const ingredientValues = {
          ingredient: rawIngredientValues.ingredient,
          quantity: Number(rawIngredientValues.quantity),
          calories: Number(rawIngredientValues.calories),
          fat: Number(rawIngredientValues.fat),
          carbs: Number(rawIngredientValues.carbs),
          protein: Number(rawIngredientValues.protein),
        };

        setCurrentIngredientsList((prev) => [...prev, ingredientValues]);
      }

      formRef.current.reset();
    }
  };
  const handleIngredientRemoval = (index) => {
    const updatedIngredientsArray = [...currentIngredientsList];
    updatedIngredientsArray.splice(index, 1);

    setCurrentIngredientsList(updatedIngredientsArray);
  };

  const handleImageEdit = (e) => {
    if (e.target.files[0]) {
      setEditedRecipeImage({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  useEffect(() => {
    if (editedRecipeImage.file !== null) {
      setDisplayImage(editedRecipeImage.url);
    }
  }, [editedRecipeImage]);

  const handleRecipeEdit = () => {
    if (timeOfDay === "Breakfast") {
      breakfastRecipes[index].name = editedTitle;
      breakfastRecipes[index].description = editedDescription;
      breakfastRecipes[index].timeOfDay = editedTimeOfDay;
      breakfastRecipes[index].nutrition = addedIngredientsTotalNutrition;
      breakfastRecipes[index].ingredients.ingredientArray =
        currentIngredientsList;
      if (editedRecipeImage.url !== "") {
        breakfastRecipes[index].image = editedRecipeImage.url;
      }
    } else if (timeOfDay === "Lunch") {
      lunchRecipes[index].name = editedTitle;
      lunchRecipes[index].description = editedDescription;
      lunchRecipes[index].timeOfDay = editedTimeOfDay;
      lunchRecipes[index].nutrition = addedIngredientsTotalNutrition;
      lunchRecipes[index].ingredients.ingredientArray = currentIngredientsList;
      if (editedRecipeImage.url !== "") {
        lunchRecipes[index].image = editedRecipeImage.url;
      }
    } else if (timeOfDay === "Dinner") {
      dinnerRecipes[index].name = editedTitle;
      dinnerRecipes[index].description = editedDescription;
      dinnerRecipes[index].timeOfDay = editedTimeOfDay;
      dinnerRecipes[index].nutrition = addedIngredientsTotalNutrition;
      dinnerRecipes[index].ingredients.ingredientArray = currentIngredientsList;
      if (editedRecipeImage.url !== "") {
        dinnerRecipes[index].image = editedRecipeImage.url;
      }
    } else {
      snacksRecipes[index].name = editedTitle;
      snacksRecipes[index].description = editedDescription;
      snacksRecipes[index].timeOfDay = editedTimeOfDay;
      snacksRecipes[index].nutrition = addedIngredientsTotalNutrition;
      snacksRecipes[index].ingredients.ingredientArray = currentIngredientsList;
      if (editedRecipeImage.url !== "") {
        snacksRecipes[index].image = editedRecipeImage.url;
      }
    }

    setShowEditModal(false);
  };

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
                  checked={editedTimeOfDay === "Breakfast"}
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
                  checked={editedTimeOfDay === "Lunch"}
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
                  checked={editedTimeOfDay === "Dinner"}
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
                  checked={editedTimeOfDay === "Snacks"}
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
                {currentIngredientsList.map((ingredient, index) => (
                  <div className="ingredient" key={index}>
                    <img
                      src="../../../images/RemoveIconRed.svg"
                      alt="Remove Icon"
                      onClick={() => handleIngredientRemoval(index)}
                    />
                    <p>
                      {" "}
                      Ingredient Name: {ingredient.ingredient} || Quantity:{" "}
                      {ingredient.quantity}g || Calories: {ingredient.calories}{" "}
                      cal || Fat: {ingredient.fat}g || Carbs: {ingredient.carbs}
                      g || Protein: {ingredient.protein}g
                    </p>
                  </div>
                ))}
              </div>
              <div className="ingredientInputs">
                <form ref={formRef}>
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
                <img
                  src="../../../images/AddBoxFill.svg"
                  alt="Add Icon"
                  onClick={handleIngredientAddition}
                />
              </div>
            </fieldset>
          </div>
          <div className="editNutritionSummary">
            <fieldset className="editNutritionFieldset">
              <legend>Edit Nutritional Summary & Description</legend>
              <div className="totalMacros">
                {
                  <p>
                    Total Calories: {addedIngredientsTotalNutrition.calories}{" "}
                    cal || Total Fat: {addedIngredientsTotalNutrition.fat}g ||
                    Total Carbs: {addedIngredientsTotalNutrition.carbs}g ||
                    Total Protein: {addedIngredientsTotalNutrition.protein}g
                  </p>
                }
              </div>
              <div className="recipeDescription">
                <textarea
                  placeholder={
                    currentRecipe.description !== ""
                      ? currentRecipe.description
                      : "Edit Description"
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
                  src={
                    displayImage !== ""
                      ? displayImage
                      : "../../../images/AddPhotoAlt.svg"
                  }
                  alt="Recipe Image"
                />
                Change Image
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="recipeImage"
                onChange={handleImageEdit}
              />
            </div>
            <div className="editRecipeTitle">
              <input
                type="text"
                placeholder={
                  currentRecipe.name !== ""
                    ? currentRecipe.name
                    : "Edit Recipe Title"
                }
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </div>
            <div className="editButton" onClick={handleRecipeEdit}>
              <p>Edit Recipe</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditRecipeModal;
