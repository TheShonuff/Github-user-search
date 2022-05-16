import React from "react";
import { darkTheme, lightTheme } from "./GlobalStyles";

const themeColors = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = React.useState("light");

  //get defined mode from the browser
  React.useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);

  const setTheme = (name) => {
    //turn configurations to css variables
    const keys = Object.keys(themeColors[name]);
    keys.map((key) => {
      const constructVar = `--${key}`;
      document.body.style.setProperty(constructVar, themeColors[name][key]);
      return false;
    });

    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
