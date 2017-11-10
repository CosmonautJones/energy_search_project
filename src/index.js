import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import './index.css';

import App from './App';
import ZipForm from './components/ZipForm.js';
import LoginForm from './components/LoginForm.js';
import EnergyPlans from './components/EnergyPlans';
import rootReducer from './reducers';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const configureStore = applyMiddleware(ReduxPromise)(createStore);
const store = configureStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/zipform" component={ZipForm} />
				<Route path="/login" component={LoginForm} />
        <Route path="/plans" component={EnergyPlans} />
      </div>
    </Router>
	</Provider>,

	document.getElementById('root')
);
