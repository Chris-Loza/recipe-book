import { useContext } from "react";
import "./timeOfDay.css";
import { GlobalContext } from "../../Library/globalContext";

const TimeOfDay = ({ timeOfDayProp, recipeCount }) => {
  const { timeOfDay, setTimeOfDay } = useContext(GlobalContext);

  const handleTimeOfDay = () => {
    setTimeOfDay(timeOfDayProp);
  };

  return (
    <div className="timeOfDay">
      <h1 onClick={handleTimeOfDay}>{timeOfDayProp}</h1>
      <p>Total Recipes: {recipeCount}</p>
      <div className="bottomBorder"></div>
    </div>
  );
};

export default TimeOfDay;
