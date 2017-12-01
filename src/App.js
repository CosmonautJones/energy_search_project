import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './App.css';
import './Pictures/greenBulb.png';

import Login from './components/Login.js'
import CreateAccount from './components/CreateAccount.js'

import ZipForm from './components/ZipForm.js';
import LoginForm from './components/LoginForm.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
    }
  }

  componentWillMount() {
    if (localStorage.getItem('uuID')) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  }

  doLogout() {
    localStorage.setItem('uuID', '');
    window.location = '/';
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <header className="App-header">
            <img className="header-image" src={require('./Pictures/greenBulb.png')} className="App-logo" alt="logo" />
            <h1>Welcome to EnerTree</h1>
            <p className="Welcome">
            Guiding you to a more cost-effective energy plan.
            </p>
          </header>
        </div>
        <body>
          {loggedIn ? <div className="Inline-button">
              <button className="btn btn-primary btn-sm" onClick={this.doLogout}>Logout</button>
            </div> : null}
          <Route path="/" exact component={ Login }></Route>
          <Route path="/create-user" component={ CreateAccount }></Route>
          <p className="ZipLink">
            <Button className="Button"><Link className="Link" to="/zipform">Enter Zip</Link></Button>
          </p>
          <p className="Login">
            <Button className="Button"><Link className="Link" to="/login"> Login</Link></Button>
          </p>
          <p className="Plans">
            <Button className="Button"><Link className="Link" to="/plans"> View Plans</Link></Button>
          </p>
          </body>
      </div>
    );
  }
}

export default App;
