import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdas', name: 'Teo', age: 26 },
      { id: 'feffewf', name: 'Max', age: 28 },
      { id: 'ayfwgefyg', name: 'Katie', age: 18 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id; })

    const person = { ...this.state.persons[personIndex] }

    // const person = Object.assign({}, this.state.persons[personIndex]); create new object old way

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      padding: '10px',
      outline: 'none',
      border: '1px solid green',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'darkgreen',
        color: 'purple'
      }
    }


    let persons = null;
    if (this.state.showPersons) {

      persons = (
        <div className="Person-container">
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => { this.deletePersonHandler(index) }} // or this.deletePersonHandler.bind(this,index);
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => { this.nameChangedHandler(event, person.id) }}
              />
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style.border = '1px solid red';
      style[':hover'] = {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }

    let cssClasses = [];

    if (this.state.persons.length <= 2) {
      cssClasses.push('red');
    }

    if (this.state.persons.length <= 1) {
      cssClasses.push('bold');
    }


    return (
      <div className="App">
        <h1>Test</h1>
        <p className={cssClasses.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default Radium(App);
