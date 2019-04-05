import React, { Component } from 'react'

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, index) => <h1>{index +1}. {person.name} 🚀</h1>)}
        <h1>7. Ben Haugen 👨‍🚀</h1>
      </div>
    )
  }
}

export default App
