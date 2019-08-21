import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
import CApp from './conteiners/CApp';

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
//const store = createStore(reducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <CApp />
  </Provider>
  , document.getElementById('root'));