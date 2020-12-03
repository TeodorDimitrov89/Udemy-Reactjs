import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';

import {Provider} from 'react-redux';
import personReducer from './store/reducers/person';

import registerServiceWorker from './registerServiceWorker';

// const rootReducer = combineReducers({
//   persons: personReducer
// });

const store = createStore(personReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
