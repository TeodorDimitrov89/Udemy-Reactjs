import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  result: []
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
        result: state.result.concat({ id: +new Date(), value: state.counter }) // Adding new Item to the Array
      }
    case actionTypes.DELETE_RESULT:
      const updatedState = state.result.filter(item => item.id !== action.id); // Removing Item from the Array
      return {
        ...state,
        result: updatedState
      };
    default:
      return state;
  }
}

export default reducer;