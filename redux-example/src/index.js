import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
})

// Store
const store = createStore(rootReducer);


// Dispaching Action


//Subscription (subscribe)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
