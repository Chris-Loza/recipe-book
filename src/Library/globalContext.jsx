import { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [timeOfDay, setTimeOfDay] = useState("Breakfast");

  return (
    <GlobalContext.Provider
      value={{
        timeOfDay,
        setTimeOfDay,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
