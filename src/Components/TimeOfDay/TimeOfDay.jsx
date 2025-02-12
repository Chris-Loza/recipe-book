import { useContext, useState } from "react";
import "./timeOfDay.css";
import { GlobalContext } from "../../Library/globalContext";

const TimeOfDay = ({ timeOfDayProp, recipeCount }) => {
  const { timeOfDay, setTimeOfDay } = useContext(GlobalContext);

  const handleTimeOfDay = () => {
    setTimeOfDay(timeOfDayProp);
  };

  

  return (
    <div className="timeOfDay">
      <h1 onClick={handleTimeOfDay} className={timeOfDay === timeOfDayProp ? "active" : ""}>{timeOfDayProp}</h1>
      <p>Total Recipes: {recipeCount}</p>
      <div className="bottomBorder"></div>
    </div>
  );
};

export default TimeOfDay;
