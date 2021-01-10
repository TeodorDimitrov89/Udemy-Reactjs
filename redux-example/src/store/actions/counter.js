import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const add = (payload) => {
  return {
    type: actionTypes.ADD,
    payload: payload
  }
}

export const subtract = (payload) => {
  return {
    type: actionTypes.SUBTRACT,
    payload: payload
  }
}