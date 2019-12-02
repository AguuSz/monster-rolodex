import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/CardList';
import { SearchBar } from './components/searchBar/SearchBar';

export class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    //get the data
    fetch('https://jsonplaceholder.typicode.com/users')
      //It'll get a promise, which we will turn it into a json 
      .then(response => response.json())
      //it'll get another promise, now in json, where we will set it to state
      .then(users => this.setState({ monsters: users }))
  }

  searchMonster = (e) => {
    this.setState({
      searchField: e.target.value
    })//, () => console.log(this.state)); //Using a callback makes this syncronous
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBar placeholder="Search monster..." handleChange={this.searchMonster} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
