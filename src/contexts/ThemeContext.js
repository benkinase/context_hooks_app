import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

//shared data
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: { color: "#555", ui: "#ddd", bg: "#eee" },
    dark: { color: "#ddd", ui: "orange", bg: "white" },
  };
  render() {
    return (
      //pass state data to provider
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
