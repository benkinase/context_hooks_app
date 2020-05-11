//change the context state
import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { changeTheme } = this.context;
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
  }
}

export default ThemeToggle;
