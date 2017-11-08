import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import './index.css';
import App from './App';
import ZipForm from './components/ZipForm.js';
import reducers from './reducers';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/zipform" component={ZipForm} />
      </div>
    </Router>
	</Provider>,

	document.getElementById('root')
);
