//import logo from './logo.svg';
import React, { Component } from 'react';
import Mycars from './components/Mycars'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Mycars/>
        </header>
      </div>
    );
  }
}

export default App;
