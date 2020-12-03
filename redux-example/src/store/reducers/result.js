import * as actionTypes from '../actions';

const initialState = {
  result: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.STORE_RESULT:
        const id = Math.random().toString(36).substring(5);
        return {
          ...state,
          result: [...state.result, {id: id, result: action.result}]
        }
        case actionTypes.REMOVE_RESULT:
          const filteredResult = state.result.filter(el => el.id !== action.id);
          return {
            ...state,
            result: filteredResult
          }
    default:
      return state;
  }
 
}

export default reducer;