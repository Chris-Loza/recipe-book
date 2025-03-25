import { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [timeOfDay, setTimeOfDay] = useState("Breakfast");
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [lunchRecipes, setLunchRecipes] = useState([]);
  const [dinnerRecipes, setDinnerRecipes] = useState([]);
  const [snacksRecipes, setSnacksRecipes] = useState([]);

  const deleteRecipe = (timeOfDay, index) => {
    if (timeOfDay === "Breakfast") {
      setBreakfastRecipes((prevRecipe) =>
        prevRecipe.filter((_, i) => i !== index)
      );
    } else if (timeOfDay === "Lunch") {
      setLunchRecipes((prevRecipe) => prevRecipe.filter((_, i) => i !== index));
    } else if (timeOfDay === "Dinner") {
      setDinnerRecipes((prevRecipe) =>
        prevRecipe.filter((_, i) => i !== index)
      );
    } else if (timeOfDay === "Snacks") {
      setSnacksRecipes((prevRecipe) =>
        prevRecipe.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        timeOfDay,
        setTimeOfDay,
        breakfastRecipes,
        setBreakfastRecipes,
        lunchRecipes,
        setLunchRecipes,
        dinnerRecipes,
        setDinnerRecipes,
        snacksRecipes,
        setSnacksRecipes,
        deleteRecipe,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
