import React, { Component } from "react";

class App extends Component {
  state = {};

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(json => renderFunction(json));
  }

  render() {
    return "test";
  }
}

export default App;
