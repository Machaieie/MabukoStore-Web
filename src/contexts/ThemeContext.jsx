import React, { useEffect, createContext, useState } from "react";
import THEMES from "../Constants";

const initialState = {
  theme: THEMES.DEFAULT,
  setTheme: (theme) => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme && Object.values(THEMES).includes(storedTheme)) {
      setTheme(storedTheme);
    }
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const contextValue = {
    theme,
    setTheme: updateTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
