import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div>
        <div
          className="book-list"
          style={{ background: theme.bg, color: theme.color }}
        >
          <ul>
            <li style={{ background: theme.ui }}>Best book</li>
            <li style={{ background: theme.ui }}>Born to rule</li>
            <li style={{ background: theme.ui }}>Still great</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BookList;
