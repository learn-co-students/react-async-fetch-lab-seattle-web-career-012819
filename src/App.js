import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)


  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return <div></div>
  }
}

function httpRequest(url, method='GET', data={}) {
  const init = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method,
    body: JSON.stringify(data)
  }
  if (method.toLowerCase() === 'get') delete init.body;
  else if (method.toLowerCase() === 'post' && init.body.id) delete init.body.id;

  return fetch( url, init);
}