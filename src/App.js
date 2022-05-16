import logo from "./logo.svg";
import { keepTheme } from "./Themes";
import "./App.css";
import Search from "./Search";
import UserView from "./UserView";
import { useEffect } from "react";

//
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <button onClick={switchTheme}>I'm a Theme Changer</button>
      <Search />
    </div>
  );
}

export default App;
