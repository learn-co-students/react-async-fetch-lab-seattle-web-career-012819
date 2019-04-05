import React, { Component } from 'react'

class App extends Component {
  state = {
    astronauts: []
  }

  componentDidMount = () => {
    fetch("http://api.open-notify.org/astros.json")
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      this.setState({astronauts: json.people})
    }) 
    
  }

  render() {
    return(
      <div>
        {this.state.astronauts.map((astro, i) => <h1 key={i}>{astro.name}</h1>)}
      </div>
    )
  }

}

export default App