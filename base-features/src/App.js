import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 25
      }, {
        name: 'Teo',
        age: 28
      }, {
        name: 'Stephanie',
        age: 26
      }
    ]
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Maximilian',
          age: 22
        }, {
          name: event.target.value,
          age: 28
        }, {
          name: 'Stephanie',
          age: 27
        }
      ]
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      border: '1px solid lightblue',
      borderRadius: '12px',
      padding: '12px',
      fontSize: '16px',
      width: '140px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <button style={buttonStyle} onClick={this.switchNameHandler}>Swich Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}>My hobbie is Javascript</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {   className: 'App' },
    // React.createElement('h1', null, 'Text from React.createElement'));
  }
}

export default App;
