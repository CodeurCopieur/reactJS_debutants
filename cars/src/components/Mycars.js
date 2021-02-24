import React, { Component } from 'react';
import Car from './Car';

class Mycars extends Component {

  noCopy = () => {
    alert('ne pas copier le text !!!');
  }

  addClass = (e) => {
    e.target.classList.toggle('red')
  }


  render() {
    return (
    
      <div>
        <h1 onMouseOver={this.addClass}>{ this.props.title }</h1>

        <p onCopy={this.noCopy}>ne pas copier le text !!!</p>
        
        <Car color="blue"> Peugeot </Car>
        <Car> Mercedes </Car>
        <Car color="red"></Car>
      </div>

    )
  }
}

export default Mycars;