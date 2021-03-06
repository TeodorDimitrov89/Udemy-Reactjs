import React, {Component} from 'react';
import './App.css';
// import Radium from 'radium';
import styled from 'styled-components';

import Person from '../components/Persons/Person/Person';


const StyledButton = styled.button`
    background-color: ${props => props.myAlt ? 'red': 'white'};
    color: #ccc;
    border: 1px solid lightblue;
    border-radius: 10px;
    padding: 12px;
    font-size: 16px;
    width: 140px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
      background-color: lightgreen;
      color: black;
      transition: all .3s ease;
    }
`;


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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // const buttonStyle = {
    //   backgroundColor: 'white',
    //   color: '#ccc',
    //   border: '1px solid lightblue',
    //   borderRadius: '10px',
    //   padding: '12px',
    //   fontSize: '16px',
    //   width: '140px',
    //   cursor: 'pointer',
    //   transition: 'all .3s ease',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //     transition: 'all .3s ease'
    //   }
    // }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return (<Person
                name={person.name}
                age={person.age}
                changed={(event) => {
                this.nameChangeHandler(event, person.id)
              }}
                click={() => this.deletePersonHandler(index)}
                key={person.id}/>)
            })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        {/* <button 
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button> */}
        <StyledButton 
          onClick={this.togglePersonsHandler}
          myAlt={this.state.showPersons}>Toggle Persons
        </StyledButton>

        {persons}
      </div>
    );
    // return React.createElement('div', {   className: 'App' },
    // React.createElement('h1', null, 'Text from React.createElement'));
  }
}

// export default Radium(App);
export default App;
