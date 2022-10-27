import React, { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext();


const ThemeProvider = ({children}) => {

    const [darkMode,setDarkMode] = useState(false);

    function toggleTheme() {
        setDarkMode((prev) => !prev);
      };

    return (
        <ThemeContext.Provider value={{
            darkMode,
            setDarkMode,
            toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;