import "./timeOfDay.css";

const TimeOfDay = ({ timeOfDay, recipeCount }) => {
  return (
    <div className="timeOfDay">
      <h1>{timeOfDay}</h1>
      <p>Total Recipes: {recipeCount}</p>
    </div>
  );
};

export default TimeOfDay;
