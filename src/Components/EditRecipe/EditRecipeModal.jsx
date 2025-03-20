import React, { useContext, useEffect, useRef, useState } from "react";
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

  const [displayImage, setDisplayImage] = useState(image);

  const [editedTimeOfDay, setEditedTimeOfDay] = useState(
    timeOfDay || "Breakfast"
  );
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedRecipeImage, setEditedRecipeImage] = useState({
    file: null,
    url: "",
  });

  const formRef = useRef(null);
  const [addedIngredients, setAddedIngredients] = useState({
    ingredientArray: [],
  });
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

    addedIngredients.ingredientArray.forEach((ingredient) => {
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
  }, [addedIngredients]);

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

        setAddedIngredients((prev) => ({
          ingredientArray: [...prev.ingredientArray, ingredientValues],
        }));
      }

      formRef.current.reset();
    }
  };

  const handleNewlyAddedIngredientRemoval = (index) => {
    const updatedIngredientsArray = [...addedIngredients.ingredientArray];
    updatedIngredientsArray.splice(index, 1);

    setAddedIngredients({ ingredientArray: updatedIngredientsArray });
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
    console.log("New Time of Day ", editedTimeOfDay);
    console.log("New Description ", editedDescription);
    console.log("New Title ", editedTitle);
    console.log("New Iamge ", editedRecipeImage);
    console.log("Newly Added Ingredients", addedIngredients);
  };

  console.log(timeOfDay);
  console.log(dinnerRecipes[index]);
  console.log(image);
  console.log(displayImage);
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
                {addedIngredients.ingredientArray.length > 0 &&
                  addedIngredients.ingredientArray.map((ingredient, index) => (
                    <div className="ingredient" key={index}>
                      <img
                        src="../../../images/RemoveIconRed.svg"
                        alt="Remove Icon"
                        onClick={() => handleNewlyAddedIngredientRemoval(index)}
                      />
                      <p>
                        {" "}
                        Ingredient Name: {ingredient.ingredient} || Quantity:{" "}
                        {ingredient.quantity}g || Calories:{" "}
                        {ingredient.calories} cal || Fat: {ingredient.fat}g ||
                        Carbs: {ingredient.carbs}g || Protein:{" "}
                        {ingredient.protein}g
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
                {timeOfDay === "Breakfast" ? (
                  <p>
                    Total Calories:{" "}
                    {breakfastRecipes[index].nutrition.calories +
                      addedIngredientsTotalNutrition.calories}{" "}
                    cal || Total Fat:{" "}
                    {breakfastRecipes[index].nutrition.fat +
                      addedIngredientsTotalNutrition.fat}
                    g || Total Carbs:{" "}
                    {breakfastRecipes[index].nutrition.carbs +
                      addedIngredientsTotalNutrition.carbs}
                    g || Total Protein:{" "}
                    {breakfastRecipes[index].nutrition.protein +
                      addedIngredientsTotalNutrition.protein}
                    g
                  </p>
                ) : timeOfDay === "Lunch" ? (
                  <p>
                    Total Calories:{" "}
                    {lunchRecipes[index].nutrition.calories +
                      addedIngredientsTotalNutrition.calories}{" "}
                    cal || Total Fat:{" "}
                    {lunchRecipes[index].nutrition.fat +
                      addedIngredientsTotalNutrition.fat}
                    g || Total Carbs:{" "}
                    {lunchRecipes[index].nutrition.carbs +
                      addedIngredientsTotalNutrition.carbs}
                    g || Total Protein:{" "}
                    {lunchRecipes[index].nutrition.protein +
                      addedIngredientsTotalNutrition.protein}
                    g
                  </p>
                ) : timeOfDay === "Dinner" ? (
                  <p>
                    Total Calories:{" "}
                    {dinnerRecipes[index].nutrition.calories +
                      addedIngredientsTotalNutrition.calories}{" "}
                    cal || Total Fat:{" "}
                    {dinnerRecipes[index].nutrition.fat +
                      addedIngredientsTotalNutrition.fat}
                    g || Total Carbs:{" "}
                    {dinnerRecipes[index].nutrition.carbs +
                      addedIngredientsTotalNutrition.carbs}
                    g || Total Protein:{" "}
                    {dinnerRecipes[index].nutrition.protein +
                      addedIngredientsTotalNutrition.protein}
                    g
                  </p>
                ) : timeOfDay === "Snacks" ? (
                  <p>
                    Total Calories:{" "}
                    {snacksRecipes[index].nutrition.calories +
                      addedIngredientsTotalNutrition.calories}{" "}
                    cal || Total Fat:{" "}
                    {snacksRecipes[index].nutrition.fat +
                      addedIngredientsTotalNutrition.fat}
                    g || Total Carbs:{" "}
                    {snacksRecipes[index].nutrition.carbs +
                      addedIngredientsTotalNutrition.carbs}
                    g || Total Protein:{" "}
                    {snacksRecipes[index].nutrition.protein +
                      addedIngredientsTotalNutrition.protein}
                    g
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
                placeholder={name !== "" ? name : "Edit Recipe Title"}
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
