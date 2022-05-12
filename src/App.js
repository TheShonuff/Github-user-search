import logo from "./logo.svg";
import { keepTheme } from "./Themes";
import "./App.css";
import Search from "./Search";
import UserView from "./UserView";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <div className="App">
      <h1>devfinder</h1>
      <Search />
    </div>
  );
}

export default App;
