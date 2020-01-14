import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer(history), 
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App store={store}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
