import React, { Component, createContext } from "react";

//init authcontext
export const AuthContext = createContext();

export class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };

  changeAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
    });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, changeAuth: this.changeAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
