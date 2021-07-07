import React, { Component } from 'react'
import { CardList } from './components/card-list/CardList'
import { SearchBox } from './components/searchBox/SearchBox'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [], //
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  addSearchText = (e) => {
    this.setState({
      searchField: e.target.value,
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="app">
        <SearchBox handleChange={this.addSearchText} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
