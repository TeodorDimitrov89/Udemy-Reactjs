import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: +new Date(), value: state.counter }) // Adding new Item to the Array
      }
    case actionTypes.DELETE_RESULT:
      const updatedState = state.results.filter(item => item.id !== action.id); // Removing Item from the Array
      return {
        ...state,
        results: updatedState
      };
    default:
      return state;
  }
}

export default reducer;