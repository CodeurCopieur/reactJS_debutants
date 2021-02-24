import React, { Component } from 'react';
import Car from './Car';

class Mycars extends Component {
  render() {
    return (
    
      <div>
        <h1>{ this.props.title }</h1>
        <Car color="blue"> Peugeot </Car>
        <Car> Mercedes </Car>
        <Car color="red"></Car>
      </div>

    )
  }
}

export default Mycars;