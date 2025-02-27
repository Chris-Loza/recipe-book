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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
