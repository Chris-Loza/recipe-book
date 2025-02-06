import "./homepage.css";
import TimeOfDay from "../TimeOfDay/TimeOfDay";
import RecipeCard from "../RecipeCard/RecipeCard";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="timeOfDayContainer">
        <TimeOfDay timeOfDay={"Breakfast"} recipeCount={1}/>
        <TimeOfDay timeOfDay={"Lunch"} recipeCount={1}/>
        <TimeOfDay timeOfDay={"Dinner"} recipeCount={1}/>
        <TimeOfDay timeOfDay={"Snacks"} recipeCount={1}/>
      </div>
      <div className="recipeList">
        <div className="header">
          <h1>Time of Day</h1>
          <div className="addRecipeModalContainer">Add Recipe</div>
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
