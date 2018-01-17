import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './App.css';
import './Pictures/greenBulb.png';

class App extends Component {

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img className="header-image" src={require('./Pictures/greenBulb.png')} className="App-logo" alt="logo" />
            <h1>Welcome to EnerTree</h1>
            <h4 className="Welcome">
            Guiding you to a more cost-effective energy plan.
            </h4>
          </header>
          <div className="ButtonLinks">
          <p className="ZipLink">
            <Button className="Button"><Link className="Link" to="/zipform">Enter Zip</Link></Button>
          </p>
          <p className="Login">
            <Button className="Button"><Link className="Link" to="/login"> Login</Link></Button>
          </p>
          <p className="Plans">
            <Button className="Button"><Link className="Link" to="/plans"> View Plans</Link></Button>
          </p>
          </div>
      </div>
    );
  }
}

export default App;
