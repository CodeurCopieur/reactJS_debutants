import React, { Component } from 'react'

export default class Game extends Component {

  state = {
    name: 'Codwerk',
    winner: true
  }

  render() {
      
    return this.state.winner && <h1>Bravo {this.state.name}</h1>

    /* return this.state.winner ? 
    <h1>Bravo {this.state.name}</h1> :  ''*/

    /*
    return this.state.winner ? 
    <h1>Bravo {this.state.name}</h1> :  
    <h1>raté !!!</h1>*/

    /*return (
      this.state.winner ? (
        <h1>Bravo {this.state.name}</h1>
      ) : (
        <h1>raté !!!</h1>
      )
    )*/

    /*let result;

    if (this.state.winner) {
      result = <h1>Bravo {this.state.name}</h1>
    } else {
      result = <h1>raté !!!</h1>
    }

    return result;*/

    /*if (this.state.winner) {
      return <h1>Bravo {this.state.name}</h1>
    } else {
      return <h1>raté !!!</h1>
    }*/


    /*if (this.state.winner) {
      return (
        <div>
          <h1>Bravo {this.state.name}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>raté !!!</h1>
        </div>
      )
    }*/
  }
}
