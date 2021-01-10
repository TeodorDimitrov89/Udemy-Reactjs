import * as actionTypes from './actionTypes';

export const storeResultSync = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  }
}

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(storeResultSync(result));
    }, 2000);
  }
}

export const removeResult = (id) => {
  return {
    type: actionTypes.REMOVE_RESULT,
    id: id
  }
}