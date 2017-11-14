import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css_components/ZipForm.css';

import { addZipCode } from '../actions/index.js';

class ZipForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      zip: ''
    };

    this.addZipCode = this.addZipCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  addZipCode(event) {
    event.preventDefault();
    this.props.addZipCode({
      value: this.state.zip,
    });
    this.setState({ 
      zip: ''
    });
  }

  handleSubmit(event) {
    console.log(this.state.zip);
      this.setState({
        zip: event.target.value
      });
  }

  render() {

    return (
      <div className = "ZipForm">
        <form onSubmit={this.addZipCode}>
          <label>
            Enter Zip Code Here: <br />
          </label> <br />
          <input 
              onChange={this.handleSubmit} 
              type="text" name="Zip Code"
              placeholder="Enter Zip" 
              value={this.state.zip}/> <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <Link className="Link" to="/">Home</Link>
      </div>
    );
  }
}



export default connect (null, { addZipCode }) (ZipForm);