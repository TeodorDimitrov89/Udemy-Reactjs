import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Teo', age: 26 },
      { name: 'Max', age: 28 },
      { name: 'Katie', age: 18 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!!!');
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Maximilian', age: 42 },
        { name: 'Katie', age: 26 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Teo', age: 24 },
        { name: event.target.value, age: 32 },
        { name: 'Katie', age: 24 }
      ]
    });

  }
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <button onClick={() => this.switchNameHandler('Teo!!!!')}>Switch Name</button>
        <div className="Person-container">
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Teo!')}
            changed={this.nameChangedHandler}
          >My Hpbbies: Javascript</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      </div>
    )
  }
}

export default App;
