import * as React from 'react';
import ReactDOM from 'react-dom';
// import { Auth0Provider } from '@auth0/auth0-react';import App from './App';
import './assets/styles/main.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import rootReducer from './redux/rootReducer';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, saga));

saga.run(sagaWatcher);

const appProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

const appWithRoute = (
  <BrowserRouter>
    {appProvider}
  </BrowserRouter>
);

ReactDOM.render(
  appWithRoute,
  document.getElementById('root'),
);
