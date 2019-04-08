import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()

        this.state ={
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({people: data.people})
        })
    }

    loadPeople = () => {
        return this.state.people.map((peep, index) => {
           return <h1 key={index}>{peep.name}</h1>
        })
    }

    render() {
        return(
            <div>
                {this.loadPeople()}
            </div>
        )
    }
}

export default App;
