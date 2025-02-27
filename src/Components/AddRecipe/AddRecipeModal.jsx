import { useContext, useEffect, useRef, useState } from "react";
import "./addRecipeModal.css";
import { GlobalContext } from "../../Library/globalContext";

const AddRecipeModal = ({ showModal, setShowModal }) => {
  const {
    breakfastRecipes,
    setBreakfastRecipes,
    setLunchRecipes,
    setDinnerRecipes,
    setSnacksRecipes,
  } = useContext(GlobalContext);

  const modalRef = useRef();
  const closeModal = () => {
    setShowModal(false);
  };

  const [selectedTime, setSelectedTime] = useState("Breakfast");
  const formRef = useRef(null);
  const [ingredients, setIngredients] = useState({
    ingredientArray: [],
  });

  const handleIngredientForm = (e) => {
    e.preventDefault();

    if (formRef.current) {
      const ingredientData = new FormData(formRef.current);
      const rawIngredientValues = Object.fromEntries(ingredientData.entries());
      console.log("Raw ingredient Values", rawIngredientValues);

      if (rawIngredientValues.ingredient !== "") {
        const ingredientValues = {
          ingredient: rawIngredientValues.ingredient,
          quantity: Number(rawIngredientValues.quantity),
          calories: Number(rawIngredientValues.calories),
          fat: Number(rawIngredientValues.fat),
          carbs: Number(rawIngredientValues.carbs),
          protein: Number(rawIngredientValues.protein),
        };

        setIngredients((prev) => ({
          ingredientArray: [...prev.ingredientArray, ingredientValues],
        }));
      }

      formRef.current.reset();
    }
  };

  const handleIngredientRemoval = (index) => {
    const updatedIngredientsArray = [...ingredients.ingredientArray];
    updatedIngredientsArray.splice(index, 1);

    setIngredients({ ingredientArray: updatedIngredientsArray });
  };

  const [nutritionalTotal, setNutritionalTotal] = useState({
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  });

  useEffect(() => {
    let totalCalories = 0;
    let totalFat = 0;
    let totalCarbs = 0;
    let totalProtein = 0;
    ingredients.ingredientArray.forEach((ingredient) => {
      totalCalories += ingredient.calories;
      totalFat += ingredient.fat;
      totalCarbs += ingredient.carbs;
      totalProtein += ingredient.protein;
    });

    setNutritionalTotal({
      calories: totalCalories,
      fat: totalFat,
      carbs: totalCarbs,
      protein: totalProtein,
    });
  }, [ingredients]);

  const [recipeImage, setRecipeImage] = useState({
    file: null,
    url: "",
  });

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setRecipeImage({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");

  const handleRecipeSubmit = () => {
    const newRecipe = {
      name: recipeName,
      timeOfDay: selectedTime,
      ingredients: ingredients,
      nutrition: nutritionalTotal,
      description: recipeDescription,
      image: recipeImage.url,
    };

    switch (selectedTime) {
      case "Breakfast":
        setBreakfastRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
        break;
      case "Lunch":
        setLunchRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
        break;
      case "Dinner":
        setDinnerRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
        break;
      case "Snacks":
        setSnacksRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(breakfastRecipes);
  }, [breakfastRecipes]);

  return (
    showModal && (
      <div className="modal" onClick={closeModal} ref={modalRef}>
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className="modalHeader">
            <p>Add a Recipe</p>
            <div className="botBorder"></div>
          </div>
          <div className="radioButtons">
            <fieldset className="radioFieldSet">
              <legend>Select a Time of Day</legend>
              <label htmlFor="Breakfast">
                <input
                  type="radio"
                  name="time"
                  id="Breakfast"
                  value={"Breakfast"}
                  checked={selectedTime === "Breakfast"}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span>Breakfast</span>
              </label>

              <label htmlFor="Lunch">
                <input
                  type="radio"
                  name="time"
                  id="Lunch"
                  value={"Lunch"}
                  checked={selectedTime === "Lunch"}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span>Lunch</span>
              </label>

              <label htmlFor="Dinner">
                <input
                  type="radio"
                  name="time"
                  id="Dinner"
                  value={"Dinner"}
                  checked={selectedTime === "Dinner"}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span>Dinner</span>
              </label>

              <label htmlFor="Snacks">
                <input
                  type="radio"
                  name="time"
                  id="Snacks"
                  value={"Snacks"}
                  checked={selectedTime === "Snacks"}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span>Snacks</span>
              </label>
            </fieldset>
          </div>
          <div className="recipe">
            <fieldset className="recipeFieldSet">
              <legend>Ingredients</legend>
              <div className="ingredients">
                {ingredients.ingredientArray.map((ingredient, index) => (
                  <div className="ingredient" key={index}>
                    <img
                      src="../../../images/RemoveIconRed.svg"
                      alt="Remove Icon"
                      onClick={() => handleIngredientRemoval(index)}
                    />
                    <p>
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
                  onClick={handleIngredientForm}
                />
              </div>
            </fieldset>
          </div>
          <div className="nutritionSummary">
            <fieldset className="nutritionFieldSet">
              <legend>Nutritional Summary & Description</legend>
              <div className="totalMacros">
                <p>
                  Total Calories: {nutritionalTotal.calories} cal || Total Fat:{" "}
                  {nutritionalTotal.fat}g || Total Carbs:{" "}
                  {nutritionalTotal.carbs}g || Total Protein:{" "}
                  {nutritionalTotal.protein}g
                </p>
              </div>
              <div className="recipeDescription">
                <textarea
                  placeholder="Description"
                  onChange={(e) => setRecipeDescription(e.target.value)}
                />
              </div>
            </fieldset>
          </div>
          <div className="recipeImgSubmit">
            <div className="recipeImageContainer">
              <label htmlFor="recipeImage">
                <img
                  src={recipeImage.url || "../../../images/AddPhotoAlt.svg"}
                  alt="Recipe Image"
                />
                Add an Image
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="recipeImage"
                onChange={handleImageUpload}
              />
            </div>
            <div className="recipeTitle">
              <input
                type="text"
                placeholder="Recipe Title"
                onChange={(e) => setRecipeName(e.target.value)}
              />
            </div>
            <div className="submitButton" onClick={handleRecipeSubmit}>
              <p>Submit Button</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AddRecipeModal;
