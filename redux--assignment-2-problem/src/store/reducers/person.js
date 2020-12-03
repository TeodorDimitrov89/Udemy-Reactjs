import * as actionTypes from '../actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.person.name,
        age: action.person.age
    }
      return {
        ...state,
        persons: [...state.persons, newPerson]
      }
      
    case actionTypes.DELETE_PERSON:
      const newPersonState = state.persons.filter(p => p.id !== action.personId);

      return {
        persons: [...newPersonState]
      }
    default:
      return state;
  }
}

export default reducer;