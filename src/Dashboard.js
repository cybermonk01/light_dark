import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`dashboard ${theme}`}>
      <h1>Light-Dark Switch</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Dashboard;
