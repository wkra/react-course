import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'wojtek', age: 32},
      {name:'Marta', age: 29},
      {name:'Misiek', age: 37}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 32},
        {name:'Marta', age: 29},
        {name:'Misiek', age: 47}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'wojtek', age: 32},
        {name: event.target.value, age: 29},
        {name:'Misiek', age: 27}
      ]
    })
  }

  render() {
    const styleBtn = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>HI, I'm Reat App</h1>
        <button 
          style={styleBtn}
          onClick={() => this.switchNameHandler('wwwojtek')}>
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'wojtekkk')}
          changed={this.nameChangedHandler}>
          My hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testtest'));
  }
}

export default App;
