import React from 'react';
  import './App.css';

import {CardList} from './components/Card-List/card-list.component'
import {SearchField} from './components/Search-Field/search-field.component'
//----
class App extends React.Component {
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users})) 
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render(){
    const {monsters,searchField}=this.state
    
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField placeholder={"Busca un monstruo"} onSearchChange={this.onSearchChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;