import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  //destructure all values and methods from the ThemeContext and AuthContext
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, changeAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.color }}>
        <h1>Context App</h1>
        <div onClick={changeAuth}>
          {isAuthenticated ? "logged in" : "logged out"}
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
