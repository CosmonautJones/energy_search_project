import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
      <div className = "ZipSearch">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Zip Code Here: <br />
          </label> <br />
          <input type="text" name="Zip Code" value={this.state.value} onChange={this.handleChange} ref={this.state.zip}/> <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<ZipForm />, document.getElementById('root'));

export default ZipForm;