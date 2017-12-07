import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Route }  from 'react-router-dom';

import Login from './Login.js'
import CreateAccount from './CreateAccount.js'

import "../App.css"
import '../css_components/LoginForm.css';


class LoginForm extends Component {
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
        window.location = '/login';
      }
    
      render() {
        const { loggedIn } = this.state;
        return (
          <div className="App">
            <div className="App-header">
              <h3>Welcome To The Login Page</h3>
              {loggedIn ? <div className="Inline-button">
                <button className="btn btn-primary btn-sm" 
                  onClick={this.doLogout}>Logout</button>
              </div> : null}
            </div>
          </div>
        );
      }
    }

export default LoginForm;