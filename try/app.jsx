import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <p>This is a {darkMode ? "dark" : "light"} mode example.</p>
    </div>
  );
};

export default App;
