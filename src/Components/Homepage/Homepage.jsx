import "./homepage.css";
import TimeOfDay from "../TimeOfDay/TimeOfDay";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Library/globalContext";

const Homepage = () => {
  const { timeOfDay, setTimeOfDay } = useContext(GlobalContext);

  return (
    <div className="homepageContainer">
      <div className="timeOfDayContainer">
        <TimeOfDay timeOfDayProp={"Breakfast"} recipeCount={1} />
        <TimeOfDay timeOfDayProp={"Lunch"} recipeCount={1} />
        <TimeOfDay timeOfDayProp={"Dinner"} recipeCount={1} />
        <TimeOfDay timeOfDayProp={"Snacks"} recipeCount={1} />
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
          <div className="addRecipeModalContainer">
            <p>Add Recipe</p>
          </div>
        </div>
        <div className="recipeCards">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
