import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'wojtek', age: 32},
      {id: 2, name:'Marta', age: 29},
      {id: 3, name:'Misiek', age: 37}
    ]
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const styleBtn = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
             return  <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      styleBtn.backgroundColor = 'red';
      styleBtn[':hover'] = {
        backgroundColor:'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    if (this.state.persons.length === 0){
      classes.push('underline');
    }



    return (
      <div className="App">
        <h1>HI, I'm Reat App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={styleBtn}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        {/* NOT RECOMMENDED WAY BELOW */}
        {/* { 
          this.state.showPersons ? 
          <div>
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
          </div> : null
        } */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testtest'));
  }
}

export default Radium(App);
