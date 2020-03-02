const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Redux dependencies:


// Reducer // Updating State

const rootReducer = (state = initialState, action) => {
  // updating state ... and return new state
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
      break;
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.value
      }
      break;
    default:
      break;
  }
  return state;
}

// Store
const store = createStore(rootReducer);


console.log(store.getState());
store.subscribe(() => {
  console.log('Subscribe', store.getState());
});

// Dispaching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
// Subscription

console.log(store.getState());