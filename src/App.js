import React, { useState, useEffect } from "react";
import './dark.css'

const App = () => {
  const storedDarkMode = localStorage.getItem("DARK_MODE");

  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);


  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);

  }, [darkMode]);





  return (
    <div className="dark" data-theme={darkMode ? "dark" : "light"}>
      
      <h1>My First dark mode made..</h1>


      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

    </div>
  );
};

export default App;




