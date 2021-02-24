import React, { Component } from 'react';
import Mycars from './components/Mycars'
import './App.css';

class App extends Component {

  state = {
    titre : "Mon catalogue voitures !"
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Mycars title= {this.state.titre}/>
        </header>
      </div>
    );
  }
}

export default App;
