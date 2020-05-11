//change the context state
import React, { Component } from "react";

export class ThemeToggle extends Component {
  render() {
    return (
      <div>
        <button onClick={this.changeTheme}>Change theme</button>
      </div>
    );
  }
}

export default ThemeToggle;
