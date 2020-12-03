import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

import {connect} from 'react-redux';
class Persons extends Component {
    state = {
        person: {
            name: '',
            age: null,
            valid: false
        }
    }

    personNameChangedHandler = (event) => {
        const value = event.target.value;
        this.setState(prevState => {
            const personState = {...prevState.person};
            personState.name = value;
            personState.valid =  this.validatePerson(personState.name, personState.age);
            return {
                ...prevState,
                person: personState
            }
        });
    }

    personAgeChangedHandler = (event) => {
        const age = event.target.value;
        this.setState(prevState => {
            const personState = {...prevState.person};
            personState.age = age;
            personState.valid =  this.validatePerson(personState.name, personState.age);
            return {
                ...prevState,
                person: personState
            }
        });
    }

    validatePerson(name, age) {
        return  name !== '' && Number(age) > 0;
    }
    render () {
        return (
            <div>
                <AddPerson 
                    personNameChanged={this.personNameChangedHandler}
                    personAgeChanged={this.personAgeChangedHandler}
                    disabled={this.state.person.valid}
                    personAdded={() => {this.props.onAddPerson({name:this.state.person.name, age:this.state.person.age})}} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      persons: state.persons
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (person) => {dispatch({type: actionTypes.ADD_PERSON, person})},
        onDeletePerson: (personId) => {dispatch({type: actionTypes.DELETE_PERSON, personId: personId})}, 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);