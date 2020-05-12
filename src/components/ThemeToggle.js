import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  //destructure changeTheme method from the ThemeContext
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        style={{ padding: "8px", borderRadius: "5px" }}
        onClick={changeTheme}
      >
        Change theme
      </button>
    </div>
  );
};

export default ThemeToggle;
