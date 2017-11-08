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
          <h3 className="Login">
            Login Here:
            <LoginForm />
          </h3>
          <img className="header-image2" src={require('./Pictures/greenBulb.png')} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to EnerTree</h1>
        </header>
        <p className="Welcome">
          Guiding you to a more cost-effective energy plan.
        </p>
        <Link className="ZipLink" to="/zipform">Enter Zip Here</Link>
      </div>
    );
  }
}

export default App;
