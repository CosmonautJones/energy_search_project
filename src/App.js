import React, { Component } from 'react';
import './App.css';
import './Pictures/greenBulb.png';
import ZipForm from './form/ZipForm.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('/Users/Travis/Documents/Coding/LAMBDA/energy_search_project/src/Pictures/greenBulb.png')} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to EnerTree</h1>
        </header>
        <nav>
            <ul>
              <li>Plans</li>
            </ul> 
          </nav>
        <p className="Welcome">
          This application will help guide you to a cost-effective energy plan.
        </p>
        <h3 className="Zip">
          <ZipForm />
        </h3>
      </div>
    );
  }
}

export default App;
