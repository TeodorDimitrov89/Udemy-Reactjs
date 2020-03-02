import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      console.log(action)
      return {
        ...state,
        results: state.results.concat({ id: +new Date(), value: action.result }) // Adding new Item to the Array
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