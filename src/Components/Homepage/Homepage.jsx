import "./homepage.css";
import TimeOfDay from "../TimeOfDay/TimeOfDay";
import RecipeCard from "../RecipeCard/RecipeCard";
import AddRecipeModal from "../AddRecipe/AddRecipeModal";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Library/globalContext";
import AddCards from "../RecipeCard/AddCards";

const Homepage = () => {
  const {
    timeOfDay,
    breakfastRecipes,
    lunchRecipes,
    dinnerRecipes,
    snacksRecipes,
  } = useContext(GlobalContext);

  const currentRecipes =
    timeOfDay === "Breakfast"
      ? breakfastRecipes
      : timeOfDay === "Lunch"
      ? lunchRecipes
      : timeOfDay === "Dinner"
      ? dinnerRecipes
      : timeOfDay === "snacks"
      ? snacksRecipes
      : [];
  // const [currentRecipes, setCurrentRecipes] = useState(
  //   currentInitialRecipes || []
  // );

  // useEffect(() => {
  //   setCurrentRecipes()
  // }, [timeOfDay]);
  console.log(breakfastRecipes);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="homepageContainer">
      <div className="timeOfDayContainer">
        <TimeOfDay
          timeOfDayProp={"Breakfast"}
          recipeCount={breakfastRecipes.length}
        />
        <TimeOfDay timeOfDayProp={"Lunch"} recipeCount={lunchRecipes.length} />
        <TimeOfDay
          timeOfDayProp={"Dinner"}
          recipeCount={dinnerRecipes.length}
        />
        <TimeOfDay
          timeOfDayProp={"Snacks"}
          recipeCount={snacksRecipes.length}
        />
        <div className="myInfo"> Developed by Christian Loza</div>
        <div className="myLinks">
          <div className="linkedIn">
            <img src="../../../images/LinkedIn.svg" alt="LinkedIn Icon" />
          </div>
          <div className="gitHub">
            <img src="../../../images/GitHub.svg" alt="GitHub Icon" />
          </div>
          <div className="hireMe">
            <img src="../../../images/HireMe.svg" alt="Hire Me Icon" />
          </div>
        </div>
      </div>
      <div className="recipeList">
        <div className="header">
          <p className="timeOfDayHeader">{timeOfDay}</p>
          <div
            className="addRecipeModalButton"
            onClick={() => setShowModal(!showModal)}
          >
            <p>Add Recipe</p>
          </div>
        </div>
        <div className="recipeCards">
          {currentRecipes.length > 0 ? (
            currentRecipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                index={index}
                name={recipe.name}
                ingredients={recipe.ingredients}
                nutrition={recipe.nutrition}
                description={recipe.description}
                image={recipe.image}
                timeOfDay={recipe.timeOfDay}
              />
            ))
          ) : (
            <div
              className="addRecipeCardContainer"
              onClick={() => setShowModal(!showModal)}
            >
              <AddCards />
            </div>
          )}
          {/* <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} /> */}
          {/* {timeOfDay === "Breakfast" ? (
            breakfastRecipes.length > 0 ? (
              breakfastRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  index={index}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  nutrition={recipe.nutrition}
                  description={recipe.description}
                  image={recipe.image}
                  timeOfDay={recipe.timeOfDay}
                />
              ))
            ) : (
              <div
                className="addRecipeCardContainer"
                onClick={() => setShowModal(!showModal)}
              >
                <AddCards />
              </div>
            )
          ) : timeOfDay === "Lunch" ? (
            lunchRecipes.length > 0 ? (
              lunchRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  index={index}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  nutrition={recipe.nutrition}
                  description={recipe.description}
                  image={recipe.image}
                  timeOfDay={recipe.timeOfDay}
                />
              ))
            ) : (
              <div
                className="addRecipeCardContainer"
                onClick={() => setShowModal(!showModal)}
              >
                <AddCards />
              </div>
            )
          ) : timeOfDay === "Dinner" ? (
            dinnerRecipes.length > 0 ? (
              dinnerRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  index={index}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  nutrition={recipe.nutrition}
                  description={recipe.description}
                  image={recipe.image}
                  timeOfDay={recipe.timeOfDay}
                />
              ))
            ) : (
              <div
                className="addRecipeCardContainer"
                onClick={() => setShowModal(!showModal)}
              >
                <AddCards />
              </div>
            )
          ) : timeOfDay === "Snacks" ? (
            snacksRecipes.length > 0 ? (
              snacksRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  index={index}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  nutrition={recipe.nutrition}
                  description={recipe.description}
                  image={recipe.image}
                  timeOfDay={recipe.timeOfDay}
                />
              ))
            ) : (
              <div
                className="addRecipeCardContainer"
                onClick={() => setShowModal(!showModal)}
              >
                <AddCards />
              </div>
            )
          ) : (
            "Add a Recipe"
          )} */}
        </div>
      </div>
      {showModal && (
        <div className="addRecipeModalContainer">
          <AddRecipeModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default Homepage;
