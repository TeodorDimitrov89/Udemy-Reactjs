import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
  result: []
}

const removeResult = (state, action) => {
  const filteredResult = state.result.filter(el => el.id !== action.id);
  return updateObject(state, {result: filteredResult});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.STORE_RESULT:
        const id = Math.random().toString(36).substring(5);

        return updateObject(state, {result: [...state.result, {id: id, result: action.result}]})

        // return {
        //   ...state,
        //   result: [...state.result, {id: id, result: action.result}]
        // }
        case actionTypes.REMOVE_RESULT:
          
          return removeResult(state, action);
          

          // return {
          //   ...state,
          //   result: filteredResult
          // }
    default:
      return state;
  }
 
}

export default reducer;