import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authcontext) => (
          <ThemeContext.Consumer>
            {(themecontext) => {
              const { isAuthenticated, changeAuth } = authcontext;
              const { isLightTheme, light, dark } = themecontext;
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
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
