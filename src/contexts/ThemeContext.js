import React, { createContext, useEffect, useState } from 'react';

export const ThemeProvider = createContext();

const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      // Default theme is taken as dark-theme
      localStorage.setItem("theme", "dark-theme");
      return "dark-theme";
    } else {
      return theme;
    }
  };

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);
    return (
        <ThemeProvider.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeProvider.Provider>
  );
};

export default ThemeContext;