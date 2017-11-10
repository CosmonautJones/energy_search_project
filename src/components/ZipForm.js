import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css_components/ZipForm.css';

class ZipForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      zip: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ zip: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.zip);
  }

  render() {

    return (
      <div className = "ZipForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Zip Code Here: <br />
          </label> <br />
          <input 
              type="text" name="Zip Code" value={this.state.value} 
              onChange={this.handleChange} 
              placeholder="Enter Zip" 
              ref={this.state.zip}/> <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <Link className="Link" to="/">Home</Link>
      </div>
    );
  }
}



export default ZipForm;