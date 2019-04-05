import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(astros => console.log(astros));
  }

  render() {
    return <div>Hello</div>;
  }
}

export default App;
