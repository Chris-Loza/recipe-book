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
            <a
              href="https://www.linkedin.com/in/christianloza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../../images/LinkedIn.svg" alt="LinkedIn Icon" />
            </a>
          </div>
          <div className="gitHub">
            <a
              href="https://github.com/Chris-Loza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../../images/GitHub.svg" alt="GitHub Icon" />
            </a>
          </div>
          <div className="hireMe">
            <a
              href="../../../images/Resume032525.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../../images/HireMe.svg" alt="Hire Me Icon" />
            </a>
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
          {timeOfDay === "Breakfast" ? (
            breakfastRecipes.length > 0 ? (
              breakfastRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  index={index}
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
