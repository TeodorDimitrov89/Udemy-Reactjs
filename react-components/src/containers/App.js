import React, {Component} from 'react';
import classes from './App.module.scss';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {
        id: 'dsadwq11',
        name: 'Max',
        age: 25
      }, {
        id: 'dsafdwefq11',
        name: 'Teo',
        age: 28
      }, {
        id: 'dsaf213sdf11',
        name: 'Stephanie',
        age: 26
      }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: 'Maximilian',
          age: 22
        }, {
          name: 'Teo',
          age: 28
        }, {
          name: 'Stephanie',
          age: 27
        }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

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
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons = {this.state.persons}
            changed={this.nameChangeHandler}
            clicked={this.deletePersonHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <CockPit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
