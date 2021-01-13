import axios from '../../axios-auth';
import * as actionTypes from './actionTypes';

const API_KEY = 'AIzaSyB9L2PyOsqBgyRyWHc5HJimA9uEQFXEomg';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId
  }
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }

    let url = `accounts:signUp?key=${API_KEY}`;

    if(!isSignup) {
      url = `accounts:signInWithPassword?key=${API_KEY}`;
    }

    axios.post(url, authData)
      .then(response => {
        console.log(response.data);
        const idToken = response.data.idToken;
        const userId = response.data.localId;

        dispatch(authSuccess(idToken, userId));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  }
};
