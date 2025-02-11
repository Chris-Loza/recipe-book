import "./homepage.css";
import TimeOfDay from "../TimeOfDay/TimeOfDay";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useState } from "react";

const Homepage = () => {
  const [timeOfDay, setTimeOfDay] = useState("Breakfast");

  return (
    <div className="homepageContainer">
      <div className="timeOfDayContainer">
        <TimeOfDay timeOfDay={"Breakfast"} recipeCount={1} />
        <TimeOfDay timeOfDay={"Lunch"} recipeCount={1} />
        <TimeOfDay timeOfDay={"Dinner"} recipeCount={1} />
        <TimeOfDay timeOfDay={"Snacks"} recipeCount={1} />
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
