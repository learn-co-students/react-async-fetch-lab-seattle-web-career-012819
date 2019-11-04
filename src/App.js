import React, { Component } from 'react';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      spacePeople: []
    } ;
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => {
      let spacePeople = json.people.map(person => person.name)
      this.setState({spacePeople})
    })
  }

  render() {
    return (
      <ul>
        {this.state.spacePeople.map((spaceBob, index) => <li key={index}>spaceBob</li>)}
      </ul>
    );
  }
}
