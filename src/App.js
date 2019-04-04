// create your App component here
import React, {Component} from 'react'

export default class App extends Component {

    this.state={
      people: []
    }
  

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json,')
    .then(resp => resp.json())
    .then(spacePeople => this.setState({people: spacePeople}))
  }

  render(){
    return(
      <div>
       {this.state.people.map((person) =>{
         <h1>{person.name}</h1>
       }
     )}
     </div>

  }
}
