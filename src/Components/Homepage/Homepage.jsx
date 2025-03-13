import "./homepage.css";
import TimeOfDay from "../TimeOfDay/TimeOfDay";
import RecipeCard from "../RecipeCard/RecipeCard";
import AddRecipeModal from "../AddRecipe/AddRecipeModal";
import { useContext, useState } from "react";
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
          {/* <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} />
          <RecipeCard name={"Recipe Title"} /> */}
          {timeOfDay === "Breakfast" ? (
            breakfastRecipes.length > 0 ? (
              breakfastRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  nutrition={recipe.nutrition}
                  description={recipe.description}
                  image={recipe.image}
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
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  nutrition={recipe.nutrition}
                  description={recipe.description}
                  image={recipe.image}
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
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  nutrition={recipe.nutrition}
                  description={recipe.description}
                  image={recipe.image}
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
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  nutrition={recipe.nutrition}
                  description={recipe.description}
                  image={recipe.image}
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
          )}
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
