import  React, { Component } from "react";
import Person from "./Person/Person";


class Persons extends Component {

  // static getDerivedStateFromPros(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromPros', props)
  //   return state;
  // }

  shouldComponentUpdate(nextPros, nextState) {
    // console.log(nextPros)
    // console.log(nextState)
    // console.log('[Persons.js] shouldComponentUpdate', true);
    if(nextPros.persons !== this.persons) {
      console.log('[Persons.js] shouldComponentUpdate', true);
      return true;
    }else {
      console.log('[Persons.js] shouldComponentUpdate', false);
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    // console.log(prevProps);
    // console.log(prevState);
    return null;
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (<Person
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
        click={() => this.props.clicked(index)} 
        isAuth={this.props.isAuthenticated}
        />)
    })
  }

}


export default Persons;