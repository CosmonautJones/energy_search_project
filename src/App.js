import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';
import './Pictures/greenBulb.png';

import ZipForm from './components/ZipForm.js';
import LoginForm from './components/LoginForm.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="header-image" src={require('./Pictures/greenBulb.png')} className="App-logo" alt="logo" />
          <h1>Welcome to EnerTree</h1>
        </header>
        <p className="Welcome">
          Guiding you to a more cost-effective energy plan.
        </p>
        <p className="ZipLink">
          <Link className="Link" to="/zipform">Enter Zip</Link>
        </p>
        <p className="Login">
          <Link className="Link" to="/login"> Login</Link>
        </p>
        <p className="Plans">
          <Link className="Link" to="/plans"> View Plans</Link>
        </p>
      </div>
    );
  }
}

export default App;
