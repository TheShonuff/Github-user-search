import Moon from "./assets/icon-moon.svg";
import Sun from "./assets/icon-sun.svg";
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
      <div className="Top">
        <button className="ThemeChanger" onClick={switchTheme}>
          {theme === "light" ? "DARK" : "LIGHT"}
        </button>
        <img src={theme === "light" ? Moon : Sun}></img>
      </div>
      <Search />
    </div>
  );
}

export default App;
