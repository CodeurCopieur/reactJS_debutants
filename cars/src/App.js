import React, { Component } from 'react';
import Mycars from './components/Mycars'
import './App.css';

class App extends Component {

  state = {
    titre : "Mon catalogue voitures !"
  }

  changeTitre = (e) => {
    this.setState({
      titre: 'mon titre test !'
    })
  }

  changeTitreViaParam = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeTitreViaBind = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Mycars title= {this.state.titre}/>

          <button onClick={this.changeTitre}>Changer le titre</button>

          <button onClick={()=> this.changeTitreViaParam('mon titre test ! Via Param')}>Changer le titre Via Param</button>

          <button onClick={this.changeTitreViaBind.bind(this, 'mon titre test ! Via Bind')}>Changer le titre Via Bind</button>

          <br/>

          <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>

        </header>
      </div>
    );
  }
}

export default App;
