import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      string: 'Hello Danny',
    }
  }

  render() {
    return (
      <div className="app">
        <p>Hello</p>
        {this.state.string}
      </div>
    )
  }
}

export default App
